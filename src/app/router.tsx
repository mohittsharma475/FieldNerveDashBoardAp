import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import DashBoardPage from "../features/dashboard/DashBoardPage";
import VendorDirectoryPage from "../features/vendor-directory/VendorDirectoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
    ],
  },
  {
    path: "vendors",
    element: <VendorDirectoryPage />,
  },
]);
