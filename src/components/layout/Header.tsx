import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Vender Dashboard
      </h1>

      <div className="flex gap-4 items-center">
        <Search />
        <Bell />
      </div>
    </header>
  );
}

export default Header;
