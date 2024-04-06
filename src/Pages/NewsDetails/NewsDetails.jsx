import Header from "../Shared/Header/Header";
import {useParams} from "react-router-dom"
import RightNav from "../Shared/RightNav/RightNav";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
    const {id}=useParams();
    console.log(id);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="lg:col-span-3">

                </div>
                <div className="lg:col-span-1">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;