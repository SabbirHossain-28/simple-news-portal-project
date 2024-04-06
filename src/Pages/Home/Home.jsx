import {useLoaderData} from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "../Shared/NewsCard/NewsCard";


const Home = () => {

    const newsData =useLoaderData();
    console.log(newsData);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className="lg:col-span-2">
                    {
                        newsData.map(data=><NewsCard key={data._id} data={data}></NewsCard>)
                    }
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;