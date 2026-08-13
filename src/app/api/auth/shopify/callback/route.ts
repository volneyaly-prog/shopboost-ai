import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const shop = searchParams.get('shop');
  const code = searchParams.get('code');

  const response = await fetch(`https://${shop}/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.SHOPIFY_CLIENT_ID,
      client_secret: process.env.SHOPIFY_CLIENT_SECRET,
      code,
    }),
  });

  const { access_token } = await response.json();
  if (access_token) {
    await supabase.from('stores').upsert({ shop_domain: shop, access_token: access_token });
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`);
  }
  return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
