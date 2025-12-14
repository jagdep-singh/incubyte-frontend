"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserFromToken, clearToken } from "@/libs/auth";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const syncAuth = () => {
    const user = getUserFromToken();
    setIsAuthenticated(!!user);
    setIsAdmin(user?.role === "admin");
  };

  // 🔑 THIS is the important part
  useEffect(() => {
    syncAuth();
  }, [pathname]); // re-run on every navigation

  const handleLogout = () => {
    clearToken();
    setIsAuthenticated(false);
    setIsAdmin(false);
    router.push("/login");
  };

  return (
    <nav className="w-full border-b px-6 py-3 flex justify-between items-center">
      <Link href="/" className="font-semibold">
        Sweet Shop
      </Link>

      <div className="space-x-4">
        {!isAuthenticated ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <>
            {isAdmin && <Link href="/admin">Admin</Link>}
            <button
              onClick={handleLogout}
              className="text-red-500"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
