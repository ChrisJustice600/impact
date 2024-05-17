import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col">
        <Skeleton className="w-[400px] h-[200px]" />
        <div className="mt-4 space-y-2">
          <Skeleton className="w-[300px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="w-[400px] h-[200px]" />
        <div className="mt-4 space-y-2">
          <Skeleton className="w-[300px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="w-[400px] h-[200px]" />
        <div className="mt-4 space-y-2">
          <Skeleton className="w-[300px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="w-[400px] h-[200px]" />
        <div className="mt-4 space-y-2">
          <Skeleton className="w-[300px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="w-[400px] h-[200px]" />
        <div className="mt-4 space-y-2">
          <Skeleton className="w-[300px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <Skeleton className="w-[400px] h-[200px]" />
        <div className="mt-4 space-y-2">
          <Skeleton className="w-[300px] h-[20px]" />
          <Skeleton className="w-[250px] h-[20px]" />
        </div>
      </div>
    </div>
  );
}
