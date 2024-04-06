import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cardimg1 from "../../../assets/images/1.png"
import cardimg2 from "../../../assets/images/2.png"
import cardimg3 from "../../../assets/images/3.png"
import moment from "moment";
import { FaCalendar } from "react-icons/fa";



const LeftNav = () => {
    const date=moment().format("MMMM D, YYYY");
    const cardsData=[
        {
            "id":"1",
            "image":cardimg1,
            "description":"Bayern Slams Authorities Over Flight Delay to Club World Cup",
            "category":"Sports",
            "date":date
        },
        {
            "id":"2",
            "image":cardimg2,
            "description":"Bayern Slams Authorities Over Flight Delay to Club World Cup",
            "category":"Sports",
            "date":date
        },
        {
            "id":"3",
            "image":cardimg3,
            "description":"Bayern Slams Authorities Over Flight Delay to Club World Cup",
            "category":"Sports",
            "date":date
        },
    ]

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-4">
      <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">All Category</h2>
      <div className="space-y-6 ml-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="flex text-xl font-semibold text-[#9F9F9F]"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      </div>
      <div>
            {
                cardsData.map(cardData=>(<div key={cardData.id} className="mb-5">
                    <div className="mb-5">
                    <img src={cardData.image} alt="card-image" />
                    </div>
                    <p className="text-[#403F3F] text-xl font-semibold mb-5">{cardData.description}</p>
                    <div className="flex gap-3">
                        <p className="text-[#403F3F] font-medium">{cardData.category}</p>
                        <div className="flex items-center gap-2">
                            <FaCalendar className="text-[#9F9F9F] text-lg"></FaCalendar>
                            <p className="text-[#9F9F9F] font-medium">{cardData.date}</p>
                        </div>
                    </div>
                </div>))
            }
      </div>
    </div>
  );
};

export default LeftNav;
