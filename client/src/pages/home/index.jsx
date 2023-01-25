import React from 'react'
import Slider from '../../components/header-slider'
import Cards from '../../components/cards'
import "./index.scss"
import bgReg from "../../img/search_background.jpg"
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
          <h1>Our Services</h1>
         
    
        </div>
       </div>
    </div>
  )
}

export default Home