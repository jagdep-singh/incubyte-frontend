"use client";

import { useEffect, useState } from "react";
import { getSweets } from "@/libs/api";
import SweetCard from "@/components/SweetCard";
import { Sweet } from "@/types/sweet";

export default function Home() {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSweets().then((data) => {
      setSweets(data);
      setLoading(false);
    });
  }, []);

  const handlePurchased = (id: number, qty: number) => {
    setSweets((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, quantity: Math.max(s.quantity - qty, 0) }
          : s
      )
    );
  };

  const categories = ["all", ...new Set(sweets.map((s) => s.category))];

  const filteredSweets = sweets.filter((s) => {
    const matchName = s.name.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === "all" || s.category === category;
    return matchName && matchCategory;
  });

  if (loading) {
    return <p className="p-6">Loading sweets…</p>;
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Available Sweets</h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search sweets..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-2 rounded w-full max-w-sm"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSweets.map((sweet) => (
          <SweetCard
            key={sweet.id}
            sweet={sweet}
            onPurchased={handlePurchased}
          />
        ))}
      </div>
    </main>
  );
}
