import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Utilisateurs fictifs pré-enregistrés
const FAKE_USERS = [
  { id: 1, email: "alice@test.com", password: "alice123", name: "Alice" },
  { id: 2, email: "bob@test.com", password: "bob123", name: "Bob" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const register = (email, password, name) => {
    const exists = FAKE_USERS.find((u) => u.email === email);
    if (exists) return { error: "Cet email est déjà utilisé." };
    const newUser = { id: Date.now(), email, password, name };
    FAKE_USERS.push(newUser);
    const token = btoa(JSON.stringify({ id: newUser.id, email }));
    const loggedUser = { id: newUser.id, email, name, token };
    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);
    return { success: true };
  };

  const login = (email, password) => {
    const found = FAKE_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) return { error: "Email ou mot de passe incorrect." };
    const token = btoa(JSON.stringify({ id: found.id, email }));
    const loggedUser = { id: found.id, email, name: found.name, token };
    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
