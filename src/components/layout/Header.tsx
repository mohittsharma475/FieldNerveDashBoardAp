import { Bell, Menu, Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Vender Dashboard
        </h1>
      </div>

      <div className="flex gap-4 items-center">
        <button className="hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm sm:flex">
          <Search />
        </button>
        <button className="h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm">
          <Bell />
        </button>
      </div>
    </header>
  );
}

export default Header;
