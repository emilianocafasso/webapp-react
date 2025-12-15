import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MovieDetailPage() {

    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data)
                console.log(res.data, movieId);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1 className="my-3">{movie.title}</h1>
            <div className="d-flex border">
                <img src={`http://localhost:3000/movies_images/${movie.image}`} alt="" />
                <div className="mx-3 py-2">
                    <p className="fw-bold">Director : {movie.director}</p>
                    <p>Gerne : <span className="fw-bold">{movie.genre}</span></p>
                    <p className="card-text">{movie.abstract}</p>
                </div>
            </div>
        </>
    )
}