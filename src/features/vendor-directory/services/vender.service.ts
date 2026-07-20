import type { Vendor } from "../types/vendor.types";
import data from "../../../../db.json";

export const venderService = {
  getAllVendors(): Promise<Vendor[]> {
    return Promise.resolve(data.vendors as Vendor[]);
  },
};
