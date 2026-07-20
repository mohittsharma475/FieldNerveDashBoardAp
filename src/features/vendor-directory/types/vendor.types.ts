export interface Vendor {
  id: number;
  vendorName: string;
  vendorCode: string;
  category: string;
  contactPerson: string;
  City: string;
  Rating: number;
  Status: VendorStatus;
  lastTransaction: string;
  totalPurchaseValue: number;
}

export type VendorStatus = "Active" | "Pending" | "BlackListed";
