import { useEffect, useMemo, useState } from "react";
import type { Vendor } from "./types/vendor.types";
import { venderService } from "./services/vender.service";
import VendorToolbar from "./components/VendorToolbar";
import VendorTable from "./components/VendorTable";
import TablePagination from "./components/TablePagination";

const PAGE_SIZE = 6;

function VendorDirectoryPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadVendors = async () => {
      try {
        setLoading(true);
        const response = await venderService.getAllVendors();
        setVendors(response);
      } catch (err) {
        if (err instanceof Error) setError("Failed to load Vendors Data");
      } finally {
        setLoading(false);
      }
    };
    loadVendors();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, category, status]);

  const filteredVendors = useMemo(() => {
    let result = [...vendors];

    if (search) {
      const normalizedSearch = search.trim().toLowerCase();
      result = result.filter((vendor) =>
        Object.values(vendor).some((val) =>
          val.toString().toLowerCase().includes(normalizedSearch),
        ),
      );
    }

    if (category !== "All") {
      result = result.filter((vendor) => vendor.category === category);
    }

    if (status !== "All") {
      result = result.filter((vendor) => vendor.Status === status);
    }

    return result;
  }, [vendors, search, category, status]);

  const totalPages = useMemo(
    () => Math.ceil(filteredVendors.length / PAGE_SIZE),
    [filteredVendors],
  );

  const paginatedVendors = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredVendors.slice(start, end);
  }, [page, filteredVendors]);

  if (error)
    return (
      <div className="rounded-lg border border-red-200 bg-red-50">{error}</div>
    );

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <VendorToolbar
        search={search}
        onSearch={setSearch}
        categoryOption={[...new Set(vendors.map((vendor) => vendor.category))]}
        category={category}
        onCategoryChange={setCategory}
        status={status}
        onStatusChange={setStatus}
        onExport={() => alert("Exported CSV")}
      />
      <VendorTable vendors={paginatedVendors} loading={loading} />
      {totalPages && (
        <TablePagination
          page={page}
          onSetPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default VendorDirectoryPage;
