"use client";

import { Sweet } from "@/types/sweet";
import { purchaseSweet } from "@/libs/api";
import { useState } from "react";

export default function SweetCard({
  sweet,
  onPurchased,
}: {
  sweet: Sweet;
  onPurchased: (id: number, qty: number) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(1);

  const increment = () => {
    setQty((q) => Math.min(q + 1, sweet.quantity));
  };

  const decrement = () => {
    setQty((q) => Math.max(q - 1, 1));
  };

  const handlePurchase = async () => {
    try {
      setLoading(true);
      await purchaseSweet(sweet.id, qty);
      onPurchased(sweet.id, qty);
      setQty(1);
    } catch {
      alert("Please login to purchase");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 space-y-3">
      <h3 className="font-semibold">{sweet.name}</h3>
      <p className="text-sm text-gray-500">{sweet.category}</p>

      <div className="flex justify-between text-sm">
        <span>₹ {sweet.price}</span>
        <span>Stock: {sweet.quantity}</span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center border rounded">
          <button
            onClick={decrement}
            disabled={qty <= 1}
            className="px-3 py-1 disabled:opacity-40"
          >
            −
          </button>

          <input
            type="number"
            value={qty}
            min={1}
            max={sweet.quantity}
            onChange={(e) =>
              setQty(
                Math.max(
                  1,
                  Math.min(Number(e.target.value) || 1, sweet.quantity)
                )
              )
            }
            className="w-12 text-center outline-none"
          />

          <button
            onClick={increment}
            disabled={qty >= sweet.quantity}
            className="px-3 py-1 disabled:opacity-40"
          >
            +
          </button>
        </div>

        <button
          onClick={handlePurchase}
          disabled={sweet.quantity === 0 || loading}
          className="flex-1 border rounded py-1 disabled:opacity-40"
        >
          {loading ? "Processing..." : "Purchase"}
        </button>
      </div>
    </div>
  );
}
