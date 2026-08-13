import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const shop = searchParams.get('shop');
  const state = crypto.randomBytes(16).toString('hex');
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/shopify/callback`;
  const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_CLIENT_ID}&scope=read_products,read_orders&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

  return NextResponse.redirect(installUrl);
}
