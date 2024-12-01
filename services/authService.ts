export const login = async (credentials) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Login failed.');
    }
  
    const { token } = await response.json();
    localStorage.setItem('token', token); // Store token in localStorage
  };
  
  export const logout = () => {
    localStorage.removeItem('token'); // Remove token on logout
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Check token existence
  };
  