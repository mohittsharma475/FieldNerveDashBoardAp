import { Outlet } from "react-router";
import SideBar from "./SideBar";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-100 min-h-screen">
      <SideBar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
