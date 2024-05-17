
export function Progress() {
  return (
    (<div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="h-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full"
        style={{
          width: "75%",
        }}>
        <div
          className="flex items-center justify-center h-full text-sm font-medium text-white">75%</div>
      </div>
    </div>)
  );
}
