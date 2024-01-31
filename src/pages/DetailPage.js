import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const singleData = location?.state?.singleData;
  // taking cast details but here getting wrong data from Api i should get 1 data for perticular ID but i'm getting approx 40 data thats why i skipp cast UI
  const castDetail = useSelector((state) => state?.cast?.data?.cast);
  // console.log(castDetail)

  if (!singleData) {
    // Handle the case when data is not available
    return <div>Data not available</div>;
  }

  // Render the detail page using singleData
  return (
    <div className="bg-primary py-10">
      <div className="wrapper bg-gradient-to-r from-[#010B17] to-[#1A4460] rounded-md py-8 px-6">
        <div className="flex justify-between">
          <figure className="basis-[15%]">
            <img
              src={`https://image.tmdb.org/t/p/w500${singleData?.poster_path}`}
              alt={singleData.original_title}
              className="w-full"
            />
          </figure>
          <div className="basis-[84%]">
            <h2 className="text-white font-semibold text-3xl">
              Venom: {singleData?.original_title}
            </h2>
            <span className="block text-[#6F92BA] text-xl font-semibold">
              Rating: {singleData?.vote_average}
            </span>
            <span className="block text-[#6F92BA] text-xl font-semibold">
              Release Date: {singleData?.release_date}
            </span>
          </div>
        </div>
        <h2 className="mt-10 text-white font-semibold text-[32px]">Overview</h2>
        <p className="text-textColor font-medium pr-[30%]">
          {singleData?.overview}
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
