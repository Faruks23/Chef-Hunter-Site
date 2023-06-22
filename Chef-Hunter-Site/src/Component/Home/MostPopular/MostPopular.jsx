import React from 'react';
  import "./MostPopular.css";
const MostPopular = () => {

  return (
    <div className='w-[95%] mx-auto most-f-d'>
      <h1>Most popular</h1>
      <h3>Must-try Delish dishes. </h3>
      <div className="most-container grid md:grid-cols-3 mx-auto">
        <div className="item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/delish-210212-feta-pasta-004-ab-1613747028.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*"
            alt=""
          />
          <p>Baked Feta Pasta</p>
        </div>

        <div className="item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/190508-bruschetta-horizontal-2-1558014808.png?crop=0.671xw:1.00xh;0.139xw,0&resize=360:*"
            alt=""
          />
          <p>Bruschetta</p>
        </div>

        <div className="item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/delish-200302-over-baked-ribs-0185-landscape-pf-1590087100.jpg?crop=0.542xw:0.813xh;0.224xw,0.00721xh&resize=360:*"
            alt=""
          />
          <p>Oven-Baked Ribs</p>
        </div>

        <div className="item">
          <img
            src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/04/3200x3200/square-1453934758-chicken-bacon-spaghetti-delish.jpg?resize=360:*"
            alt=""
          />
          <p>Tuscan Chicken Pasta</p>
        </div>

        <div className="item">
          <img
            src="https://hips.hearstapps.com/vidthumb/images/1455837174-delish-slow-cooker-chicken-1-1524676158.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=360:*"
            alt=""
          />
          <p>Slow-Cooker Garlic-Parmesan Chicken</p>
        </div>
        <div className="item">
          <img
            src="https://hips.hearstapps.com/vidthumb/images/prime-rib-horizontal-oven-1541012064.png?crop=0.606xw:0.909xh;0.154xw,0.0697xh&resize=360:*"
            alt=""
          />
          <p>Prime Rib</p>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;