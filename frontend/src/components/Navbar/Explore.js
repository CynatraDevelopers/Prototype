import "./Navbar.css";
import { TextField } from '@mui/material';
import NavigationBar from './Navbar';

const ExploreFeed = () => {

    const submitSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div className="epxlore">
            <div className="explore__top">
                <div className="top__textbox">
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
                <div className="top__name">
                    {"C Y N A T R A"}
                </div>
            </div>
            <div className="explore__body">
                <NavigationBar/>
            </div>
        </div>
    );
}
 
export default ExploreFeed;