import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute adminOnly>
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <p className="text-gray-500 mt-2">
          Admin controls will go here.
        </p>
      </main>
    </ProtectedRoute>
  );
}
