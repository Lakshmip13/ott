import { useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Movieslist=({movies, title})=>{

    let [favid,setFavid]=useState([]);
    let [altered,setAltered]=useState(0);

    useEffect(()=>{
       let fav=JSON.parse(localStorage.getItem("fav"));
       setFavid(fav.map((m)=>{return m.id}))
        },[altered]);
    
        let handleAddtofav=(movie)=>{
         let fav=JSON.parse(localStorage.getItem("fav"));
         fav.push(movie);
         fav=JSON.stringify(fav);
         localStorage.setItem("fav",fav);
        //  alert("movies added to favorites list")
        setAltered(altered+1);
    }

    let removeMovie=(id)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter((m)=>{return m.id!=id})
        localStorage.setItem("fav",JSON.stringify(fav));
        //  alert("movie has been temoved")
        setAltered(altered+1);
     }
    return(
        <div>
            <h1 id="title">{title}</h1>
        {movies && <div className="movies"> 
        {movies.map((movie)=>{
            return(
<div className="movie">
    { favid.includes(movie.id)?
    <button onClick={()=>{removeMovie(movie.id)}}id="btn4"><i id="id5"class='bx bxs-heart'></i></button>:
    <button onClick={()=>{handleAddtofav(movie)}}id="btn5"><i id="id4"class='bx bx-heart'></i></button>
    }
               <Link to={`/moviedetails/${movie.id}`} id="a1">
                
                    <img src={movie.poster} alt="poster" width="200px" height="250px"/>
                    <h2>{movie.moviename}</h2>
                    <p>{movie.genre}</p>
                    </Link> 
                </div>
            )
        }    )}  
    </div>}
    </div>
    );
}
export default Movieslist;