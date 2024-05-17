export function ButtonDon({ text }) {
  return (
    <button className="inline-flex items-center rounded-[50px] border border-gray-200 bg-[#fe7f6d] px-[120px] py-[16px] mb-4 text-md font-medium text-white shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300">
      {text}
    </button>
  );
}
