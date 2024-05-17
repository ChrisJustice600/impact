import { Skeleton } from "@/components/ui/skeleton";

const BentoGridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4 md:py-12">
      <div className="col-span-1 rounded-lg overflow-hidden relative group">
        <Skeleton className="w-full h-full " />
      </div>
      <div className="col-span-1 grid grid-rows-2 gap-6">
        <div className="rounded-lg overflow-hidden relative group">
          <Skeleton className="w-[300px] h-[200px]" />
        </div>
        <div className="rounded-lg overflow-hidden relative group">
          <Skeleton className="w-[300px] h-[200px] " />
        </div>
      </div>
    </div>
  );
};

export default BentoGridSkeleton;
