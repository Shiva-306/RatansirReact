import MovieCard from "./MovieCard";

function MovieGrid()
{
    const movies=[
        {title:"OG",description:"Gangster drama",year:2025 },
        {title:"Pushpa",description:"Smuggling drama",year:2021},
        {title:"RRR",description:"Friendship",year:2022},
        {title:"Guntur kaaram",description:"Family drama",year:2024},
        {title:"Salaar",description:"Friendship",year:2023}
    ];
       
    const a= movies.map((movie,index)=>
            <li key={index}>Movie:{movie.title } Description:{movie.description } year:{movie.year }
            </li>);
       
return(
    <>
      <MovieCard movieObj = {a} />
    </>
)
}
export default MovieGrid;