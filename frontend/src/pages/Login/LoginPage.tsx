import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="logo">🧠 Echooo</h1>

        <p className="subtitle">
          Your AI Second Brain
        </p>

        <form className="login-form">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="divider">or</p>

        <button className="google-btn">
          Continue with Google
        </button>

      </div>
    </div>
  );
}