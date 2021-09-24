import './Profile.css'
import React, { Component } from 'react';
import { MdModeEdit, MdThumbsUpDown } from 'react-icons/md'
import axios from "axios"

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      email: "Cristina_Okuneva178@gmail.com",
      data: {}
    }
  }

  componentDidMount() {
    const userEmail = {
      email: this.state.email
    }

    axios
      .post("/api/auth/userinfo", userEmail)
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        console.log(err)
      });

  }

  render() {
    const { data } = this.state;
    //var sum = 0;
    //sum = data.followers.map((da, key) => (sum += 1));
    return (
      <div className="App profile">
        <div className="profileBar">
          <img className="displayPicture" src={data.images} alt="profile-img" />
          <h2>{data.name}</h2>
          <h3 className='profession'>{data.A_O_E}</h3>
          <hr></hr>
          <p className='heading'>Experience<MdModeEdit className="iconEdit" /></p>
          {data.W_E ? Array.from(data.W_E).map((art, key) => (
            key < 2 && (
              <div key={key}>
                <p className="subheading">{art}</p>
              </div>
            )
          )) : ""}


          <p className='heading'>Education<MdModeEdit className="iconEdit" /></p>
          <div>
            <p className="subheading">{data.education}</p>
          </div>

          <p className='heading'>Language<MdModeEdit className="iconEdit" /></p>
          <p className="subheading">{data.language}</p>
        </div>
      </div>
    );
  }
}

export default Profile;