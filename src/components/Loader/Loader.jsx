import { BallTriangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="blue"
        ariaLabel="loading-indicator"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
