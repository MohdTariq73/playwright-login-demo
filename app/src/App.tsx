import { type FormEvent, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage('');
    setUsernameError('');
    setPasswordError('');

    let hasError = false;

    if (!username.trim()) {
      setUsernameError('Username is required');
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (username === 'admin' && password === 'admin123') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Welcome Back</h1>
      <p>Login to your account</p>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          {usernameError && <p>{usernameError}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {passwordError && <p>{passwordError}</p>}
        </div>

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;