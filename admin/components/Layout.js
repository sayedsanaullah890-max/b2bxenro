export default function Layout({ children }) {
  return (
    <main style={{padding: 24, fontFamily: "sans-serif", maxWidth: 800, margin: "0 auto"}}>
      {children}
      <footer style={{marginTop: 24, opacity: 0.7}}>
        Admin talks to: {process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "(not set)"}
      </footer>
    </main>
  );
}
