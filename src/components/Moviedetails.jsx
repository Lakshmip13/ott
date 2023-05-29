import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import Relaventmovie from "./Relaventmovies";
import { useNavigate } from "react-router-dom";

const Moviedetails=()=>{
    let {id}=useParams()
    let navigate =useNavigate()
    let [movie, setmovie]=useState(null);
    let [error,setError]=useState(null);
    let [pending,setPending]=useState(true);

    let [displayEditbox,setdisplayEditbox]=useState(false);

    useEffect(()=>{

        setmovie(null);
        setPending(null);
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                 setmovie(data) 
                setPending(false);
            })
            .catch((err)=>{
                //setError(err.message);})
                setError("404 Network issue please try again later!!!!")
                setPending(false);
              })
        }, 3000)
    },[id])

let deleteMovie=()=>{
    fetch("http://localhost:4000/movies/"+id,{method:"DELETE"})
    .then(()=>{navigate("/")})
}

    return(
        <div>
            <h1 id="h4">Movie details component</h1>
            {/* <h1>{id}</h1> */}
            {pending==true && <h1>Loading.......</h1>}
            {error && <h1>{error}</h1>}
            {movie && <div className="movie-details">
               <div id="div1"> <img src={movie.poster} alt="poster" width="400px" height="300px"/>
                <h1>Movie:{movie.moviename}</h1>
                <h1>Hero:{movie.hero}</h1></div>
               <div id="div2"><p>Director:{movie.director}</p>
                <p>Language: {movie.languages.join(" , ")}</p>
                <p>Genre: {movie.genre}</p>
                <p>Synopsis:{movie.synopsis}</p>
                <iframe id="if"width="450" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <button id="delete" onClick={deleteMovie}>Delete</button>
              <Link to={`/edit/${id}`}> <button id="update">update</button></Link>
                </div> 
                   </div>}
                   {movie && <Relaventmovie genre={movie.genre}/>}
                   
        </div>
    );
}
export default Moviedetails;