import './Profile.css'
import { useState } from 'react';

// const Profile = () => {
//     return(
//         <div className='Rect'>
//             <div className='displayPicture'>                
//             </div>
//             <h2>Amritesh Amrit</h2>
//             <h3 className='job'>Designer | Illustrator</h3>
//             <hr></hr>
//             <p className='heading'>Experience</p>

//             <p className='subheading'>Head Designer</p>
//             <p className='desc'>Building Blocks | Internship | 3 months</p>

//             <p className='subheading'>Head Designer</p>
//             <p className='desc'>Building Blocks | Internship | 3 months</p>

//             <p className='subheading'>Head Designer</p>
//             <p className='desc'>Building Blocks | Internship | 3 months</p>

//             <p className='heading'>Education</p>
//             <p className='heading'>Language</p>
            

//         </div>
//     );
// }
// export default Profile;

export function Profile() {
// react Hook For State Handler
  const [data , setData]=useState(null)

// Fetch Function   
  fetch("./fakedata.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
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
                        <p className='heading'>Experience</p>
                        {data.experience.map(function(experience,i){
                            return <div key={i}>                            
                                <p className="subheading">{experience.position}</p>
                                <p className="desc">{experience.description}</p>
                                </div>                          
                        })}
                        <p className='heading'>Education</p>
                        {data.education.map(function(education,i){
                            return <div key={i}>                            
                                <p className="subheading">{education.degree}</p>
                                <p className="desc">{education.college}</p>
                                </div>                          
                        })}
                        <p className='heading'>Language</p>
                        <p className="desc">{data.language}</p>                        
                    </div>)
          }
        ):""
      }
    </div>
  );
}

export default Profile;