
import type { DashboardResponse } from "../types/dashboard.types";
import data from "../../../../db.json";

export const dashboardService = (): Promise<DashboardResponse> => {
  return Promise.resolve(data.dashboard);
};
