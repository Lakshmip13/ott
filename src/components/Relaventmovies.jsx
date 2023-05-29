import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Relaventmovie = ({genre}) => {
    let [movies,setMovies]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{setMovies(data)})
    },[])
    return (

        <div className="relavent">
         {/* {movies && <Movieslist movies={movies} title="Relavant Movies"/>} */}
         {/* <h1>{genre}</h1> */}
          {/* {movies &&
          <Movieslist movies={movies.filter((m)=>{
            return m.genre.split(" ").some((g)=>{return m.genre.includes(g)})
           } )}
         title="Relavent Moies"/> } */}

         {movies &&
         <Movieslist movies={movies.filter((m)=>{return m.genre.includes(genre)})} title="Relavent movies"/>}
        </div>
      );
}
 
export default Relaventmovie;

