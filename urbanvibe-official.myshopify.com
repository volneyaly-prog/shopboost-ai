export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1>Welcome to ShopBoost AI</h1>
      <a href="/api/auth/shopify?shop=urbanvibe-official.myshopify.com" className="bg-blue-600 text-white p-2 rounded">
        Connect Shopify Store
      </a>
    </main>
  );
}
