import './Navbar.css'
import { FaHome, FaBell, FaShareAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi'
import Explore from '../ExploreFeed/ExploreFeed';

function NavigationBar() {
    return (
      <div className="Explore_page">
        <div className="NavBar">
          <div className="Rect">
            <div className="Circle">
              <p className="AccName">AccountName</p>
            </div>
            <div>
              <FaHome className="iconHome"/>
              <p className="HomeText">Home</p>
            </div>
            <div>
              <FaBell className="iconBell"/>
              <p className="BellText">Notifications</p>
            </div>
            <div>
              <FaShareAlt className="iconShare"/>
              <p className="ShareText">Share</p>
            </div>
            <div>
              <FiSettings className="iconSettings"/>
              <p className="SettingsText">Settings</p>
            </div>
          </div>
        </div>
        <Explore></Explore>
      </div>
    );
  }

export default NavigationBar;