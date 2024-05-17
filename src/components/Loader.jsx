import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="20"
        width="50"
        color="#fe7f6d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
