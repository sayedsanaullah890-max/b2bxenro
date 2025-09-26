export default function Home() {
  return (
    <main style={{padding: 24, fontFamily: "sans-serif"}}>
      <h1>My B2B Storefront</h1>
      <p>Backend URL: {process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "(not set)"} </p>
    </main>
  );
}
