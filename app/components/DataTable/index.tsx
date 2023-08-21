import React, { ReactNode } from "react";

export const TableHead = ({ children }: { children: ReactNode }) => {
  return (
    <thead className={`border-b font-medium dark:border-neutral-500`}>
      {children}
    </thead>
  );
};
export const TableBody = ({ children }: { children: ReactNode }) => {
  return <tbody>{children}</tbody>;
};
export const TableRow = ({
  children,
  className,
}: {
  children: ReactNode | string | number;
  className?: string;
}) => {
  return <tr className={`${className}`}>{children}</tr>;
};

export const TableCell = ({
  children,
  className,
}: {
  children: ReactNode | string | number;
  className?: string;
}) => {
  return (
    <th scope="col" className={`px-6 py-4 ${className}`}>
      {children}
    </th>
  );
};

const DataTable = ({ children }: { children: ReactNode | string | number }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;