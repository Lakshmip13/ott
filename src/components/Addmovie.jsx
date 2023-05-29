import { useRef } from "react";
import { userNavigate} from 'react-router-dom'
const Addmovie=()=>{

    let navigate=userNavigate();
    let moviename=useRef();
    let hero=useRef();
    let heroine=useRef();
    let director=useRef();
    let genre=useRef();
    let yor=useRef();
    let rating=useRef();
    let poster=useRef();
    let trailer=useRef();
    let synopsis=useRef();

    let handleAddMovie=(e)=>{
        e.preventDefault()
        let newMovie={
            moviename: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: yor.current.value,
            rating: rating.current.value,
            synopsis: synopsis.current.value,
            languages: ["add selected languages"]
        };
        let options=document.getElementsByName("lang");
        for(let i=0;i<options.length;i++){
            if(options[i].checked==true){
            newMovie.languages.push(options[i].value)
            }
        }
        // send the movie obj to the database 
        console.log(newMovie);
        fetch("http://localhost:4000/movies",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newMovie)
        })
        .then(()=>{
            alert("new data added to database");
            //window.location.reload();
            navigate("/")
        })
        }

return(
    <div>
    <h1>Add movie</h1>
    <div className="addmovie">
        <form onSubmit={handleAddMovie}>
            <input id="i1"  reqiured type="text" placeholder="Movie name" ref={moviename}/>
            <input id="i2" required type="text" placeholder="hero name" ref={hero}/>
            <input  id="i3" required type="text" placeholder="heroine" ref={heroine}/>
            <input  id="i4" required type="text" placeholder="director" ref={director}/>
            <input  id="i5" required type="text" placeholder="genre" ref={genre}/>  
            <fieldset id="fs">
                <legend>Select Language</legend>
            <input required  type="checkbox" value="kannada"/>
                <label htmlFor=""> kannada</label>
                <input type="checkbox" value="tamil"/>
                <label htmlFor=""> tamil</label>
                <input type="checkbox" value="telugu"/>
                <label htmlFor=""> telugu</label>
                <input type="checkbox" value="malayalam"/>                                              
                <label htmlFor=""> malayalam</label>
                <input type="checkbox" value="hindi"/>
                <label htmlFor=""> hindi</label>
            </fieldset>
            <input id="i6"type="url" placeholder="poster" ref={poster}/>
            <input id="i7"type="url" placeholder="trailer" ref={trailer}/>
            <input id="i8"type="number" min="1950" max="2024" placeholder="relese" ref={yor}/>
            <input id="i9"type="number" placeholder="rating" step="0.1" min="1" max="10" ref={rating}/>
            <textarea name="discription"  cols="55" rows="9" ref={synopsis}></textarea>
             <input id="i10"type="submit" value="add" /> 
        </form>
        </div>
    </div>
);
}
export default Addmovie;