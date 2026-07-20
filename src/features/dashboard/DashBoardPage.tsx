import { useEffect, useState } from "react";
import { type DashboardResponse } from "./types/dashboard.types";
import { dashboardService } from "./services/dashboard.services";
import KPIGrid from "./components/KPIGrid";
import VenderTrendChart from "./components/VenderTrendChart";
import CategoryDistributionChart from "./components/CategoryDistributionChart";

function DashBoardPage() {
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        const response = await dashboardService();
        setDashboard(response);
      } catch (err) {
        if (err instanceof Error) setError("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) return <div>Loading.....</div>;

  if (error)
    return (
      <div className="rounded-lg border border-red-200 bg-red-50">{error}</div>
    );

  if (!dashboard) {
    return (
      <div className="rounded-lg border p-4">No Dashboard data available.</div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      <KPIGrid stats={dashboard.stats} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <VenderTrendChart data={dashboard.trend} />
        <CategoryDistributionChart data={dashboard.categories} />
      </div>
    </div>
  );
}

export default DashBoardPage;
