import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonDon } from "../components/component/button-don";
import { Progress } from "../components/component/progress";
export default function SinglePage() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://capstone2-c1-chrisjustice600.onrender.com/users/v/project/${id}`
        );
        setPostInfo(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(postInfo);
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 overflow-y-auto no-scrollbar bg-gray-100 p-8 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{postInfo.titre}</h1>
          </div>{" "}
          <img
            src={postInfo.photo}
            alt=""
            className="w-full h-[460px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{ aspectRatio: "600 / 600", objectFit: "cover" }}
            width={600}
            height={600}
          />
          <div>Cagnotte organisé par {postInfo?.user?.username} </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Description</h2>

            <div
              className="text-gray-500 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: postInfo?.description }}
            />
          </div>{" "}
        </div>
      </div>
      <div className="sticky top-0 right-0 h-screen w-[30%] bg-gray-100 p-8 dark:bg-gray-800 ">
        <div>13 256 </div>
        <div className="my-4">Collecté sur 201 0000 $</div>
        <Progress />
        <div className="flex flex-col justify-center items-center mt-4 ">
          <ButtonDon text="Je soutiens" />
          <ButtonDon text="Partager" />
        </div>
      </div>
    </div>
  );
}
