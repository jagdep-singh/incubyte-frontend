"use client";

import { useEffect, useState } from "react";
import { getUserFromToken, clearToken } from "@/libs/auth";

export const useAuth = () => {
  const [user, setUser] = useState<{
    role: "admin" | "user";
  } | null>(null);

  useEffect(() => {
    const data = getUserFromToken();
    if (data?.role) {
      setUser({ role: data.role });
    } else {
      setUser(null);
    }
  }, []);

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return {
    user,
    isAdmin: user?.role === "admin",
    isAuthenticated: !!user,
    logout,
  };
};
