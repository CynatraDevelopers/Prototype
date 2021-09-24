import './Navbar.css'
import { FaHome, FaBell, FaShareAlt } from 'react-icons/fa';
import { FiSettings,  FiBriefcase} from 'react-icons/fi'
import Explore from '../ExploreFeed/ExploreFeed';
import {useHistory} from 'react-router-dom'; 

function NavigationBar() {
    let history = useHistory();

    const handelRedirect = (url) => {
      history.push("/"+url)
    }

    return (
      <div className="Explore_page">
        <div className="NavBar">
          <div className="Rect">
            <div className="Circle" onClick={()=>handelRedirect("profile")}>
              <p className="AccName">Jelly</p>
            </div>
            <div className="text__navbar" onClick={()=>handelRedirect("profile")}>
              <FaHome className="iconHome"/>
              <p className="HomeText">Profile</p>
            </div>
            <div className="text__navbar" onClick={()=>handelRedirect("explore")}>
              <FaBell className="iconBell"/>
              <p className="BellText">Notifications</p>
            </div>
            <div className="text__navbar" onClick={navigator.clipboard.writeText("http://localhost:3000/profile")}>
              <FaShareAlt className="iconShare"/>
              <p className="ShareText">Share</p>
            </div>
            <div className="text__navbar" onClick={()=>handelRedirect("jobs")}>
              <FiBriefcase className="iconJob"/>
              <p className="JobsText">Jobs</p>
            </div>
            <div className="text__navbar" onClick={()=>handelRedirect("explore")}>
              <FiSettings className="iconSettings"/>
              <p className="SettingsText">Settings</p>
            </div>
          </div>
        </div>
        <div className="exp">
          <Explore></Explore>
        </div>
      </div>
    );
  }

export default NavigationBar;