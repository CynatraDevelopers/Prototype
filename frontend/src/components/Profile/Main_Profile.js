import Explore from '../ExploreFeed/ExploreFeed';
import "./Profile.css";
import Profile from './Profile';
import { useHistory } from 'react-router';
// import {IoArrowBackCircleOutline} from 'react-icons/fa';

const Main_Profile = () => {

    let history = useHistory();

    const backHome = (e) => {
        e.preventDefault();
        history.push("/explore");
    }

    return (
        <div className="profile">
            <Profile/>
            <div className="profile__explore">
                <div className="profile__top">
                    <div className="back">
                        <i class="fas fa-arrow-circle-left" onClick={(e)=>backHome(e)}></i>
                    </div>
                    <div className="profile__right">
                        {"C Y N A T R A"}
                    </div>
                </div>
                    <Explore/> 
            </div>
        </div>
    );
}
 
export default Main_Profile;