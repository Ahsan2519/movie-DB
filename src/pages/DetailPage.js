import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const singleData = location?.state?.singleData;
  // taking cast details
  const castDetail = useSelector((state) => state?.cast?.data?.cast);

  if (!singleData) {
    // Handle the case when data is not available
    return <div>Data not available</div>;
  }

  // Render the detail page using singleData
  return (
    <div className="bg-primary py-10">
      <div className="wrapper">
        <div className="bg-gradient-to-r from-[#010B17] to-[#1A4460] rounded-md py-8 px-6">
          <div className="sm:flex justify-between">
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
          <h2 className="mt-10 text-white font-semibold text-[32px]">
            Overview
          </h2>
          <p className="text-textColor font-medium sm:pr-[15%]">
            {singleData?.overview}
          </p>
        </div>
        <div className="py-7">
          <span className="text-white text-3xl">Cast</span>
          <ul className="flex flex-wrap gap-8 pt-6">
            {castDetail?.map((cast) => {
              return (
                cast?.profile_path && (
                  <li key={cast.cast_id} className=" basis-full sm:basis-[45.66%] lg:basis-2/12">
                    <figure>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${cast?.profile_path}`}
                        alt={cast?.name}
                      />
                    </figure>
                    <h3 className="text-textColor leading-5 mt-2 text-lg">{cast?.name}</h3>
                    <p className="text-textColor leading-5 mt-2 text-lg">character: {cast?.character}</p>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
