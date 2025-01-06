export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <header className="flex border-b border-zinc-700 items-center justify-between px-10 py-10 bg-zinc-800">
        <h1>
          <strong>🚗 Dashboard</strong>
        </h1>
      </header>
      <div className="flex items-center justify-between container mx-auto py-4">
        {children}
      </div>
    </div>
  );
}
