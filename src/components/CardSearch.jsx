import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";

const ProjectCard = ({ id, titre, user, photo }) => {
  console.log(photo);
  return (
    <Link to={`/campagn/${id}`}>
      <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
        <img
          src={photo}
          alt={titre}
          className="w-full h-[210px] object-cover"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{titre}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            par {user.username}
          </p>
          {/* <div className="flex items-center justify-between">
            <span className="text-primary font-semibold">{price}</span>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
              {buttonText}
            </button>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

const CardSearch = () => {
  const [gridPost, setGridPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Initially not loading

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader before fetching

      try {
        const response = await axios.get(
          "https://capstone2-c1-chrisjustice600.onrender.com/users/v/project"
          // {
          //   // withCredentials: true, // Include cookies for authentication
          // }
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
  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
          {gridPost.length > 0 &&
            gridPost.map((post) => <ProjectCard {...post} />)}
        </div>
      )}
    </>
  );
};

export default CardSearch;
