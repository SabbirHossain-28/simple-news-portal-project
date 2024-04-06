import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZoneimg1 from "../../../assets/images/qZone1.png"
import qZoneimg2 from "../../../assets/images/qZone2.png"
import qZoneimg3 from "../../../assets/images/qZone3.png"
import addBannerBg from "../../../assets/images/bg.png"
import { Link } from "react-router-dom";
const RightNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-6">Login With</h2>
        <button className="btn btn-outline w-full text-blue-600 text-lg mb-4">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full text-black text-lg">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-4">
        <h2 className="text-2xl font-semibold mb-6">Find Us On</h2>
        <a href="" className="flex items-center gap-2 border-2 rounded-t-lg p-2 text-[#706F6F]">
        <div className="bg-[#F3F3F3] w-10 h-10 flex justify-center items-center rounded-full">
        <FaFacebook className="text-2xl"></FaFacebook>   
        </div>
        <p className="text-xl font-medium">Facebook</p>
        </a>
        <a href="" className="flex items-center gap-2 border-x-2 p-2 text-[#706F6F]">
        <div className="bg-[#F3F3F3] w-10 h-10 flex justify-center items-center rounded-full">
        <FaTwitter className="text-2xl"></FaTwitter>   
        </div>
        <p className="text-xl font-medium">Twitter</p>
        </a>
        <a href="" className="flex items-center gap-2 border-2 rounded-b-lg p-2 text-[#706F6F]">
        <div className="bg-[#F3F3F3] w-10 h-10 flex justify-center items-center rounded-full">
        <FaInstagram className="text-2xl"></FaInstagram>   
        </div>
        <p className="text-xl font-medium">Instagram</p>
        </a>   
      </div>
      <div className="p-4 bg-[#F3F3F3] mb-6">
        <h2 className="text-2xl font-semibold mb-6">Q-Zone</h2>
        <div className="mb-4">
            <img src={qZoneimg1} alt="" />
        </div>
        <div className="mb-4">
            <img src={qZoneimg2} alt="" />
        </div>
        <div>
            <img src={qZoneimg3} alt="" />
        </div>
      </div>
      <div>
        <div>
          <div style={{"backgroundImage":`url(${addBannerBg})`}} className="h-[500px] w-full relative flex items-center justify-center text-center">
            <div className="absolute p-9">
              <p className="text-white text-3xl font-bold mb-5">Create an Amazing Newspaper</p>
              <p className="text-white mb-7">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
              <Link><button className="btn bg-[#D72050] border-none text-white">Learn More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
