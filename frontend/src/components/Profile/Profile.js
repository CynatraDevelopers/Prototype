import './Profile.css'
import { useState } from 'react';
import {MdModeEdit} from 'react-icons/md'

export function Profile() {
  const [data , setData]=useState(null)
  fetch("./fakedata.json").then(
    function(res){
    return res.json()
  }).then(function(data){

    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return (
    <div className="App">
      {
       data? data.map(
          function(data){
                  return (
                    <div className="Rect"> 
                        <img className="displayPicture" src={data.url} alt="profile-img"/>
                        <h2>{data.name}</h2>
                        <h3 className='profession'>{data.profession}</h3>
                        <hr></hr>
                        <p className='heading'>Experience<MdModeEdit className="iconEdit"/></p>
                        
                        {data.experience.map(function(experience,i){
                            return <div key={i}>                            
                                <p className="subheading">{experience.position}</p>
                                <p className="desc">{experience.description}</p>
                                </div>                          
                        })}
                        <p className='heading'>Education<MdModeEdit className="iconEdit"/></p>
                        {data.education.map(function(education,i){
                            return <div key={i}>                            
                                <p className="subheading">{education.degree}</p>
                                <p className="desc">{education.college}</p>
                                </div>                          
                        })}
                        <p className='heading'>Language<MdModeEdit className="iconEdit"/></p>
                        <p className="desc">{data.language}</p>                        
                    </div>)
          }
        ):""
      }
    </div>
  );
}

export default Profile;