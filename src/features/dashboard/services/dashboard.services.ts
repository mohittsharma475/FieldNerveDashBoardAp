
import apiClient from "../../../services/apiClient";
import type { DashboardResponse } from "../types/dashboard.types";

export const dashboardService = async (): Promise<DashboardResponse> => {
  const { data } = await apiClient.get("/dashboard");
  return data;
};
