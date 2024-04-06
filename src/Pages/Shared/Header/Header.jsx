import logo from "../../../assets/images/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mt-6 mb-8">
      <div>
        <img src={logo} alt="" />
      </div>
      <p className="text-lg text-[#706F6F] ">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
