import React, { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import "./css/btnStyle.css";
import { StarRateBtn } from './StarRateBtn';


function UserCard({ id, url, name, userFilteredList }) {

  const [user, setUser] = useState(null);
  // added
  const[userChoice, setUserChoice]= useState('');

  const fetchUser = async () => {
    // render the first page of 50 characters (array of id, name, image, url)
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
    console.log(user)
  };

  useEffect(() => {
    fetchUser();
  }, [userFilteredList]);

  return (
    <>
      {user ? (
            <div className="card mb-3 w-100 h-100 indiv-card d-flex btnStyle" >
                <div className="row g-0">
                    <div className="col-md-6 my-auto">
                      <img src={`${user.imageUrl}`} className="img-fluid rounded-start pt-3 ps-2"   class="image" alt="disney characters" 
                      value={userChoice.imageUrl} 
                      onChange={event=>{
                        setUserChoice(event.target.value) 
                      }}/>
                      <div className="overlay overlayLeft">
                        <div className="text">
                          <Link to={`/characters/${id}`} style={{color: "black"}}>
                            <h5 className="card-title cardImgTitle">{user.name}</h5>
                            <span>Learn More About Me.</span>
                          </Link>
                        </div>
                        <div className='starContainer'>
                          <StarRateBtn />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 my-auto">
                      <div className="card-body">
                        <Link to={`/characters/${id}`} style={{color: "black"}}>
                          <h5 className="card-title">{user.name}</h5>
                        </Link>
                      </div>
                    </div>
                </div>
                {/* <div className="row pt-3">
                  <div col-md-6>
                    <ul>
                      {user.tvShows.map((tvshow, idx) => (
                        <li key={idx}>TV Show(s): {tvshow}</li>
                      ))}
                    </ul>
                  </div>
                </div> */}
            </div>
      ) : (
        ""
      )}
    </>
  );
}

export { UserCard };