import React from 'react';
import img1 from './pic-1.jpg'
import img2 from './pic-2.jpg'
import img3 from './pic-3.jpg'
import ceo from './ceo.jpg'
import './Carousel.css'
const Carousel = () => {
    return (
        <div>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




            {/* <div className='home'>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
          <div>
  <div class="row g-0 topbar">
    <div class="col-md-4">
      <img src={img1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div >
        <h5 style={{fontWeight:'bold'}} >FootBall</h5>
        <h1 style={{fontWeight:'bold'}}>Your one of the most favorite sports.If you are a crazy fan of football stay with us to know update news of football.</h1>
        <p>
        Football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.
        </p>
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
        </div>
        <p><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <div>
  <div class="row g-1 topbar">
    <div class="col-md-4">
      <img src={img2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div >
        <h5 style={{fontWeight:'bold'}}>History</h5>
        <h1 style={{fontWeight:'bold'}}>Your one of the most favorite sports.If you are a crazy fan of football stay with us to know update news of football.</h1>
        <p class="card-text">Football is the world’s most popular ball game in numbers of participants and spectators. Simple in its principal rules and essential equipment, the sport can be played almost anywhere, from official football playing fields (pitches) to gymnasiums, streets, school playgrounds, parks, or beaches. Football’s governing body, the Fédération Internationale de Football Association (FIFA), estimated that at the turn of the 21st century there were approximately 250 million football players and over 1.3 billion people “interested” in football; in 2010 a combined television audience of more than 26 billion watched football’s premier tournament, the quadrennial month-long World Cup finals.</p>
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
        </div>
        <p ><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
            </div>
            <div class="carousel-item">
            <div >
  <div class="row g-0 topbar">
    <div class="col-md-4">
      <img src={img3}class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div >
        <h5 style={{fontWeight:'bold'}} >Modern Footbal</h5>
        <h1 style={{fontWeight:'bold'}} class="card-text">Your one of the most favorite sports.If you are a crazy fan of football stay with us to know update news of football.</h1>
        <p >The new rules were not universally accepted in Britain, however; many clubs retained their own rules, especially in and around Sheffield. Although this northern English city was the home of the first provincial club to join the FA, in 1867 it also gave birth to the Sheffield Football Association, the forerunner of later county associations. Sheffield and London clubs played two matches against each other in 1866, and a year later a match pitting a club from Middlesex against one from Kent and Surrey was played under the revised rules. In 1871 15 FA clubs accepted an invitation to enter a cup competition and to contribute to the purchase of a trophy. By 1877 the associations of Great Britain had agreed upon a uniform code, 43 clubs were in competition, and the London clubs’ initial dominance had diminished.</p>
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
        </div>
        <p ><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
</div>
</div> */}
        </div>
    );
};

export default Carousel;