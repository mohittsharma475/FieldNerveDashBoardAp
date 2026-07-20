import {
  Users,
  UserCheck,
  UserX,
  Clock,
  Star,
  ShoppingCart,
} from "lucide-react";
import KPICard from "./KPICard";
import { type DashboardStats } from "../types/dashboard.types";

interface Props {
  stats: DashboardStats;
}

function KPIGrid({ stats }: Props) {
  const cards = [
    {
      title: "Total Vendors",
      value: stats.totalVendors,
      icon: Users,
    },
    {
      title: "Active Vendors",
      value: stats.activeVendors,
      icon: UserCheck,
    },
    {
      title: "Blacklisted Vendors",
      value: stats.blacklistedvendors,
      icon: UserX,
    },
    {
      title: "Pending Approvals",
      value: stats.pendingApprovals,
      icon: Clock,
    },
    {
      title: "Average Rating",
      value: stats.averageRating,
      icon: Star,
    },
    {
      title: "Active Purchase Orders",
      value: stats.activePurchaseOrders,
      icon: ShoppingCart,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  xl:grid-cols-3">
      {cards.map((card) => {
        return <KPICard key={card.title} {...card} />;
      })}
    </div>
  );
}

export default KPIGrid;
