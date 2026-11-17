function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          background-color: #0d1117;
        }
      `}</style>
      <main style={styles.container}>
        <div style={styles.card}>
          <span style={styles.badge}>EM CONSTRUÇÃO</span>
          <h1 style={styles.title}>O Mago Quântico</h1>
          <p style={styles.subtitle}>
            Onde a consciência, os símbolos e a informação moldam a realidade.
          </p>
          <hr style={styles.divider} />
          <p style={styles.quote}>
            "O observador altera o que é observado. O conhecimento profundo
            transforma o caos em ordem."
          </p>
          <footer style={styles.footer}>
            Portal colaborativo em desenvolvimento &bull; Baseado na engenharia do
            curso.dev
          </footer>
        </div>
      </main>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    padding: "1.5rem",
    boxSizing: "border-box",
  },
  card: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "2.5rem 2rem",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
  },
  badge: {
    display: "inline-block",
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    fontWeight: 600,
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    backgroundColor: "#1f6feb22",
    color: "#58a6ff",
    border: "1px solid #1f6feb55",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2.25rem",
    margin: "0 0 0.5rem 0",
    color: "#f0f6fc",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1.05rem",
    lineHeight: "1.6",
    color: "#8b949e",
    margin: "0 0 1.5rem 0",
  },
  divider: {
    border: "0",
    height: "1px",
    backgroundColor: "#21262d",
    margin: "1.5rem 0",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#e6edf3",
    margin: "0 0 1.5rem 0",
  },
  footer: {
    fontSize: "0.8rem",
    color: "#6e7681",
  },
};

export default Home;
