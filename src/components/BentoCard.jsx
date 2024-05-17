import axios from "axios";
import { useEffect, useState } from "react";
import Ima2 from "../assets/images/social2.jpg";
import Ima3 from "../assets/images/social3.jpg";
import BentoGridSkeleton from "./BentoGridSkeleton";

const BentoCard = () => {
  const [gridPost, setGridPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Initially not loading

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader before fetching

      try {
        const response = await axios.get(
          "https://capstone2-c1-chrisjustice600.onrender.com/users/v/project",
          {
            withCredentials: true, // Include cookies for authentication
          }
        );
        // setUserInfo(response.data);
        // console.log(response.data);
        setGridPost(response.data);
      } catch (error) {
        console.error("Error fetching user campagn:", error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching or error
      }
    };

    fetchData();
  }, []);
  function formatDate(apiDate) {
    const date = new Date(apiDate);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  }

  return (
    <>
      {isLoading ? (
        <BentoGridSkeleton />
      ) : (
        <div>
          <h3 className="max-w-4xl mx-auto px-4 text-[25px] pt-[20px] text-center font-bold text-[#3a3838] ">
            La collecte de fonds en ligne démocratise le don, permettant à
            chacun d'avoir un impact significatif, quels que soient ses moyens
            financiers.{" "}
          </h3>
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4 md:py-12">
            {gridPost.length > 0 && (
              <div className="col-span-1 rounded-lg overflow-hidden relative group">
                <img
                  // src={Ima}
                  src={gridPost[0] && gridPost[0].photo}
                  alt="Main Card"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ aspectRatio: "600 / 600", objectFit: "cover" }}
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                  <div className="space-y-2 text-white">
                    <h3 className="text-2xl font-bold">
                      {" "}
                      {gridPost[0] && gridPost[0].titre}
                    </h3>

                    <p className="text-sm">
                      <span>
                        Cagnotte lancé le{" "}
                        {gridPost[0] && formatDate(gridPost[0].dateCreation)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="col-span-1 grid grid-rows-2 gap-6">
              {gridPost.length > 0 && (
                <div className="rounded-lg overflow-hidden relative group">
                  <img
                    src={Ima2}
                    alt="Small Card 1"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ aspectRatio: "600 / 300", objectFit: "cover" }}
                    width={600}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <div className="space-y-1 text-white">
                      <h4 className="text-lg font-semibold">
                        {gridPost[0] && gridPost[0].titre}
                      </h4>
                      <p className="text-sm">
                        Cagnotte lancé le{" "}
                        {gridPost[0] && formatDate(gridPost[0].dateCreation)}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {gridPost.length > 0 && (
                <div className="rounded-lg overflow-hidden relative group">
                  <img
                    src={Ima3}
                    alt="Small Card 2"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ aspectRatio: "600 / 300", objectFit: "cover" }}
                    width={600}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                    <div className="space-y-1 text-white">
                      <h4 className="text-lg font-semibold">
                        {gridPost[0] && gridPost[0].titre}
                      </h4>
                      <p className="text-sm">
                        Cagnotte lancé le{" "}
                        {gridPost[0] && formatDate(gridPost[0].dateCreation)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BentoCard;
