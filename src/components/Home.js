import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=1060" className="card-img" alt="background" height="600px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
          <p className="card-text fs-2">
           STATY TUNED FOR FOR UPCOMING COLLECTION
          </p>
            </div>
          
         
        </div>
      </div>
    </div>
  );
}
