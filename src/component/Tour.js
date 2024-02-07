import React from "react";

function Tour({ img, title, date, text, location, days, cost }) {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={img} className='tour-img' alt='' />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>
            {location}
          </p>
          <p>{days}</p>
          <p>from {cost}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
