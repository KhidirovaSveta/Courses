import React from 'react'
import Slider from '../../components/header-slider'
import Cards from '../../components/cards'
import bgReg from "../../img/search_background.jpg"
import servimg1 from "../../img/img1.png"
import servimg2 from "../../img/img2.png"
import servimg3 from "../../img/img3.png"
import servimg4 from "../../img/img4.png"
import servimg5 from "../../img/img5.png"
import servimg6 from "../../img/img6.png"
import eventimg from "../../img/event.webp"
import eventimg2 from "../../img/event2.webp"
import eventimg3 from "../../img/event3.webp"
import "./index.scss"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id='Home'>
        <Slider/>
       <div className="container">
        <div className="home">

          <div className="card-section">
         <Cards/>
          </div>     
        </div>
       </div>

       <div className="registr-section">
        <div className="yellow-section">
          <div className="txt">
          <h3 className='regHeader'>Register now and get a discount 50% discount until 1 January</h3>
          <p className='subtxt'> In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. 
          Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum,
           ante nisl fermentum nulla, vitae tempo.</p>

           <button className='regBtn'> Regist Now</button>
          </div>
        </div>
        <div className="img-section">
            <img src={bgReg} alt=""  className='bgregimg'/>

            <div className="regForm">
              <h2 className='regTitle'>Search for your course</h2>
              <div className="regInput">
              <input type="text" placeholder='Course Name' />
              </div>
              <div className="regInput">
              <input type="text" placeholder='Category' />
              </div>
              <div className="regInput">
              <input type="text" placeholder='Degree' />
              </div>
              <button className='searchCourse'> SEARCH COURSE</button>
            </div>
        </div>
       </div>

       <div className="container">
        <div className="services">
          <h1 className='serviceHeader'>Our Services</h1>
           
           <div className="service-cards">

            <div className="service-card">
              <img src={servimg1} alt="" className='img-service'/>
              <h2>Online Courses</h2>
              <p className='service-parag'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                 Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>


            <div className="service-card">
              <img src={servimg2} alt="" className='img-server'/>
              <h2>Online Courses</h2>
              <p className='service-parag'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                 Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>


            <div className="service-card">
              <img src={servimg3} alt="" className='img-server'/>
              <h2>Online Courses</h2>
              <p className='service-parag'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                 Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>



            <div className="service-card">
              <img src={servimg4} alt="" className='img-service'/>
              <h2>Online Courses</h2>
              <p className='service-parag'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                 Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>

            <div className="service-card">
              <img src={servimg5} alt="" className='img-service'/>
              <h2>Online Courses</h2>
              <p className='service-parag'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                 Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>


            <div className="service-card">
              <img src={servimg6} alt="" className='img-service'/>
              <h2>Online Courses</h2>
              <p className='service-parag'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                 Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
           </div>
    
        </div>


        <div className="upcomingEvents">
         <h1 className='upcomingEventsTitle'>Upcoming Events</h1>

         <div className="calendar">

          <div className="first d-flex">

          <div className="data">
              <p className='datadata num'>07</p>
              <p className='datadata'>January</p>
             </div>

          <div className="eventsInfo">
            <h2><Link> Student Festival</Link></h2>
            <p>Grand Central Park</p>
            <p className='eventDescription'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, 
              vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor.</p>
            </div>
              <img src={eventimg} alt="" width={"300px"}/>
          </div>

          <div className="second  d-flex">
          <div className="data">
              <p className='datadata num'>07</p>
              <p className='datadata'>January</p>
             </div>
             
          <div className="eventsInfo">
            <h2><Link> Student Festival</Link></h2>
            <p>Grand Central Park</p>
            <p className='eventDescription'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, 
              vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor.</p>
            </div>
              <img src={eventimg2} alt="" width={"300px"}/>
          </div>


          <div className="third  d-flex">

             <div className="data">
              <p className='datadata num'>07</p>
              <p className='datadata'>January</p>
             </div>
   
            <div className="eventsInfo">
            <h2><Link> Student Festival</Link></h2>
            <p>Grand Central Park</p>
            <p className='eventDescription'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, 
              vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor.</p>
            </div>
              <img src={eventimg3} alt="" width={"300px"} />
          </div>

         </div>
        </div>


       </div>
    </div>
  )
}

export default Home