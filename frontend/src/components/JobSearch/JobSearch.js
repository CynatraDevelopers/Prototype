import './JobSearch.css'
import { FaHome, FaBell, FaShareAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi'
import { TextField } from '@mui/material';

function JobSearch() {
    const submitSearch = (e) => {
        e.preventDefault();
    }
    return(
        <div className="HeaderBar">
            <div className="Title">
                {"C Y N A T R A"}
            </div>
            <div className="Search">
                <form>
                    <TextField 
                            id="outlined-basic" 
                            className="top__text" 
                            label="Search" 
                            variant="outlined"
                    />
                    <button className="search__div" onClick={(e)=>submitSearch(e)}>
                        <i class="fas fa-search explore__search"></i>
                    </button>
                </form>
            </div>
            <div className="NavBar">
                <FaHome className = "iconHome"/>
                <FaBell className = "iconBell"/>
                <FaShareAlt className = "iconShare"/>
                <FiSettings className = "iconSettings"/>
            </div>
            <div className = "ProfileInfo">
                <div className = "RectCareer">
                    <p className="CareerText">Career</p>
                </div>
                <div className = "RectName">
                    <p className = "Username">Jelly</p>
                </div>
                <div className = "ProfilePic">

                </div>
            </div>
        </div>
    );
}

export default JobSearch;