




interface TablePaginationProps {
  page: number;
  onSetPage: (page: number) => void;
  totalPages: number;
}

function TablePagination({ page, onSetPage, totalPages }: TablePaginationProps) {
  return (
    <div className="flex p-2 items-center justify-between rounded-xl border border-slate-200 bg-white shadow-sm">
      <p className="text-sm text-slate-500">
        Showing {page} of {totalPages}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => onSetPage(page - 1)}
          disabled={page === 1}
          className="rounded-lg border px-3 py-2 hover:bg-slate-100"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onSetPage(num)}
            className="rounded-lg border px-3 py-2 hover:bg-slate-100"
            style={{ backgroundColor: page === num ? "beige" : "" }}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => onSetPage(page + 1)}
          disabled={page === totalPages}
          className="rounded-lg border px-3 py-2 hover:bg-slate-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TablePagination;
