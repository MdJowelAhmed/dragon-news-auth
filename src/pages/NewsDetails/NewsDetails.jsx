import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";



const NewsDetails = () => {
    const {_id,thumbnail_url,title}=useParams()
    console.log(title)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 ">
                <div className="col-span-3">
                    <h2>{_id} </h2>
                    <h2>{title} </h2>
                    <img src={thumbnail_url} alt="" />
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default NewsDetails;