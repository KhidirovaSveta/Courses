import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./index.scss"
import { Link } from 'react-router-dom';
const Cards = () => {
    const [courses, setCourses] = useState([])
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
     axios.get(`http://localhost:8080/`).then((data) => setCourses(data.data))
    }, [])

    const handleSearch = (value) => {
        axios.get(`http://localhost:8080/`).then((data) => {
            let searchByTitle = data.data.filter((courses) => courses.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            setCourses(searchByTitle)
        })
    }

    
    const handleSortByPrice = () => {
      setToggle(!toggle)
      if(toggle){
        let sortByprice = courses.sort((a, b) => a.price > b.price ? 1:-1 )
        setCourses([...sortByprice])
      }else{
        axios.get(`http://localhost:8080/`).then((data) => setCourses(data.data))
      }
    }
    
  return (
    <div id='Cards'>
        <h1 className='coursesMainTxt'>Popular Courses</h1>
        <div className="conatiner">
            <div className="functions">
                <input type="text"  onChange={(e) => handleSearch(e.target.value)} className="search" placeholder='Search here...'/>
                <button onClick={() => handleSortByPrice()} className="sortBtn"> Sort </button>
            </div>
            <div className="allCards">
          {courses.map((cours) => {
            return(
                <div className="card">
                <img src={cours.img1}alt=""  className='cardsImg'/>
                <Link to={`/${cours._id}`}>
                <h2 className='cardTitle'>{cours.title}</h2>
                <span>{cours.tags}</span>
                </Link>

                <div className="author">
                    <img src={cours.img2} alt="" className='subimg'/>
                    <div className="authorName">
                        <p>{cours.name},  Author</p>

                        <div className="price">
                        <p>${cours.price}</p>
                        </div>
                    </div>
                </div>
               </div>
            
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Cards