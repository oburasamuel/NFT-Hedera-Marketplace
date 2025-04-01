'use client'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

// Define the User type
export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  verified?: boolean;
  bio?: string;
  joinedDate?: string;
}

// Mock users for demonstration
const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'johndoe',
    name: 'John Doe',
    avatar: 'https://ext.same-assets.com/1148739856/713842244.jpeg',
    verified: true,
    bio: 'Digital artist specializing in contemporary abstract art.',
    joinedDate: 'May 2023'
  },
  {
    id: '2',
    username: 'janedoe',
    name: 'Jane Doe',
    avatar: 'https://ext.same-assets.com/1148739856/1542636484.jpeg',
    bio: 'Art collector and NFT enthusiast.',
    joinedDate: 'January 2024'
  }
];

// Define the authentication context type
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, name: string, password: string) => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  error: null,
  login: async () => {},
  logout: () => {},
  register: async () => {}
});

// Export the hook for using the context
export const useAuth = () => useContext(AuthContext);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for saved user in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse stored user:', err);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Login function
  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real app, this would be an API call to your server
      // For this demo, we'll check against our mock users
      const foundUser = MOCK_USERS.find(u => u.username.toLowerCase() === username.toLowerCase());

      if (!foundUser) {
        throw new Error('User not found');
      }

      // Simulate password validation
      if (password !== 'password') { // For demo, any user with 'password' as password works
        throw new Error('Invalid password');
      }

      // Set user in state and localStorage
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Register function
  const register = async (username: string, name: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if username already exists
      if (MOCK_USERS.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        throw new Error('Username already taken');
      }

      // Create new user (in a real app this would be an API call)
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9), // Generate random ID
        username,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`, // Generate avatar
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      };

      // In a real app, you'd add the user to the database here
      // For this demo, we'll just set the user directly
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
