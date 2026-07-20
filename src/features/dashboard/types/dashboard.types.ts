export interface DashboardStats {
  totalVendors: number;
  activeVendors: number;
  blacklistedvendors: number;
  pendingApprovals: number;
  averageRating: number;
  activePurchaseOrders: number;
}

export interface VenderTrend {
  month: string;
  vendors: number;
}

export interface VendorCategory {
  name: string;
  value: number;
}
export interface DashboardResponse {
  stats: DashboardStats;
  trend: VenderTrend[];
  categories: VendorCategory[];
}
