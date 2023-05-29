import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";
import { useParams } from "react-router-dom";

const Searchpage = () => {
    let{searchword}=useParams();
    let [movies,setMovies]=useState(null);
    let [error,setError]=useState(null);
    let [pending,setPending]=useState(true);

    useEffect(()=>{
        setMovies(null);
        setPending(true);
    setTimeout(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
            let d=data.filter((m)=>{return (m.moviename.toLowerCase().startsWith(searchword.toLowerCase()))||
            (m.genre.toLowerCase()===searchword.toLowerCase())||(m.languages.includes(searchword))
            })
            setMovies(d);
            setPending(false);
        })
        .catch((error)=>{
            setError("404 Network issue!!! please try again later");
            setPending(false);
        })
    },3000)
    },[searchword])

    return (  
        <div className="search-count">
            {pending==true && <div className="loading" ></div>}
            {movies && <Movieslist movies={movies} title="Search result"/>}
        </div>
    );
}
 
export default Searchpage;