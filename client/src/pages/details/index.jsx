import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./index.scss"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Details = () => {
    const [detail, setDetails] = useState([])
    const {_id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
     axios.get(`http://localhost:8080/${_id}`).then((data) => setDetails(data.data))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/${_id}`).then((data) => axios.get(`http://localhost:8080/${_id}`).then((data) => setDetails(data.data))
        )
        navigate("/")
    }
    
  return (
    <div id='Details'>
        <div className="details">
            <img src={detail.img1} alt="" width={"500px"}/>
            <div className="details-info">
                <h1>{detail.title}</h1>
                <p>{detail.tags}</p>
                <button onClick={() => handleDelete(detail._id)} className="deleteBtn"> Delete </button><br/>
                <button onClick={() => navigate(-1)} className="gobackBtn"> Go back </button>
            </div>
        </div>
    </div>
  )
}

export default Details