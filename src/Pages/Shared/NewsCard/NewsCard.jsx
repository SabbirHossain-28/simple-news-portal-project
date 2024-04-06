import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const NewsCard = ({ data }) => {
  return (
    <div className="p-5 mb-6 border-2 rounded-md shadow-md">
      <div className="flex items-center justify-between bg-[#F3F3F3] p-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={data.author.img} />
            </div>
          </div>
          <div>
            {data.author.name ? (
              <p className="text-[#403F3F] font-semibold">{data.author.name}</p>
            ) : (
              <p className="text-[#403F3F] font-semibold">
                Publisher name is not available
              </p>
            )}
            {data.author.published_date ? (
              <p className="text-[#706F6F] text-sm">
                {data.author.published_date}
              </p>
            ) : (
              <p className="text-[#706F6F] text-sm">
                Published date is not available
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <FaRegBookmark className="text-2xl"></FaRegBookmark>
          <IoShareSocialOutline className="text-2xl"></IoShareSocialOutline>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-[#403F3F] text-xl font-bold">{data.title}</h2>
      </div>
      <div className="mb-6">
        <img src={data.image_url} alt="" />
      </div>
      <div className="mb-6">
        {data.details.length > 200 ? (
          <p className="text-[#706F6F]">
            {data.details.slice(0, 200)}{" "}
            <Link to={`/newsDetails/${data._id}`} className="text-blue-600 font-bold">Read more...</Link>
          </p>
        ) : (
          <p className="text-[#706F6F]">{data.details}</p>
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="text-[#706F6F] text-lg">{data.rating.number}</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <MdOutlineRemoveRedEye className="text-2xl"></MdOutlineRemoveRedEye>
          </div>
          <div>
            <p className="text-[#706F6F] text-lg">{data.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  data: PropTypes.object,
};
export default NewsCard;
