import apiClient from "../../../services/apiClient";
import type { Vendor } from "../types/vendor.types";

export const venderService = {
  async getAllVendors(): Promise<Vendor[]> {
    const { data } = await apiClient.get("/vendors");
    return data;
  },
};
