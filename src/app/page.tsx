"use client";
import { Navigate } from "@/Actions/Navigate";

const page = () => {
  const submit = (path: string) => {
    Navigate(path);
  };

  return (
    <div>
      <h1>Server</h1>
      <button
        type="button"
        onClick={() => {
          submit("/page-tow");
        }}
        className="text-white bg-bluclassName hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        page Tow
      </button>
      <button
        type="button"
        onClick={() => {
          submit("/page-th");
        }}
        className="text-white bg-bluclassName hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        page Th
      </button>

      <h1>Page One</h1>
    </div>
  );
};
export default page;
