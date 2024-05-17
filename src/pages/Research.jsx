// import UploadFile from "../components/UploadFile";
import CardSkeleton from "@/components/CardSkeleton";
import CardSearch from "../components/CardSearch";
export default function Research() {
  return (
    <div className="flex justify-center items-center pt-24">
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h2 className="text-3xl font-bold pb-8">
          Rechercher des cagnottes sur Impact Positif
        </h2>
        <h3 className="">
          Trouvez des cagnottes par titre, mot clé ou nom de famille.
        </h3>
        <div className="relative flex items-center w-[400px] ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="inline-block w-5 h-5 rounded-full bg-gray-200 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 py-2 border border-gray-300  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <UploadFile /> */}
        </div>
        <CardSearch />
      </div>
    </div>
  );
}
