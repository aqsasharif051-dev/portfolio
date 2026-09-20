import { Component } from "react";

// If anything crashes, show the reason on screen instead of a blank page.
export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "6rem 1.5rem", color: "#eafaf1", fontFamily: "system-ui, sans-serif" }}>
        <h1 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>Something went wrong</h1>
        <p style={{ color: "#93b0a1", marginBottom: "1rem" }}>
          Please send a screenshot of this box to whoever is helping you.
        </p>
        <pre style={{ whiteSpace: "pre-wrap", padding: "1rem", borderRadius: 12, background: "#0b1d15", border: "1px solid #ff7a59", color: "#ffb4a0", fontSize: "0.85rem" }}>
          {String(this.state.error?.stack || this.state.error)}
        </pre>
      </div>
    );
  }
}
