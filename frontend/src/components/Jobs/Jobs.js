import './Jobs.css'
import { TextField } from '@mui/material';
import { FaHome, FaBell, FaShareAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi'

const JobFeed = () => {
    const submitSearch = (e) => {
        e.preventDefault();
    }
    return(
        <div>
            <div className="jobHeader">
                {/* <div className="Title">
                    {"C Y N A T R A"}
                </div> */}
                <div className="Search">
                    <form>
                        <TextField 
                                id="outlined-basic" 
                                className="Searchtext" 
                                label="Search" 
                                variant="outlined"
                        />
                        <button className="search__div" onClick={(e)=>submitSearch(e)}>
                            <i class="fas fa-search explore__search"></i>
                        </button>
                    </form>
                </div>
                <div className="NavBarJobs">
                    <FaHome className = "iconHomeJobs"/>
                    <FaBell className = "iconBellJobs"/>
                    <FaShareAlt className = "iconShareJobs"/>
                    <FiSettings className = "iconSettingsJobs"/>
                </div> 
                <div className = "ProfileInfo">
                    <div className = "RectCareer">
                        <p className="CareerText">Career</p>
                    </div>
                    <div className = "RectName">
                        <p className = "Username">Jelly</p>
                    </div>
                    <div className = "ProfilePic"/>
                </div>
            </div>
        <div className="jobBody">
            <div className="jobBodyHeader">
                <p className="jobBodyHeaderText">Explore Opportunities</p>
            </div>

            <div className="jobRect">
                <p className="jobName">Sony</p>
                <div className="applyButton">
                    <p className="applyText">Apply</p>
                </div>
            </div>
{/* RECT BOXES -------------------------------------------------------------------------------------------------------------- */}

{/* RECT BOXES -------------------------------------------------------------------------------------------------------------- */}

            <div className="messagingRect">
                <p className="messagingRectText">Messaging</p>
            </div>
        </div>
        </div>
    );

}

export default JobFeed;