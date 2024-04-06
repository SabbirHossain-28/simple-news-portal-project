import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className=" p-3 bg-[#F3F3F3] flex items-center mb-4">
      <button className="btn bg-[#D72050] text-white text-lg">
        Latest news
      </button>
      <div className="ml-8">
        <Marquee className="space-x-12" pauseOnHover={true}>
          <Link to="/">Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...</Link>
          <Link to="/">Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...</Link>
          <Link to="/">Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...</Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
