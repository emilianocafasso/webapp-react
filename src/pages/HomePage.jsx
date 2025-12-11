import axios from "axios"
import { useEffect, useState } from "react"

export default function HomePage() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/movies')
            .then(res => {
                setList(res.data)
                console.log(res.data);

            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>Lista film</h1>
            {list.map(movie => {
                return (
                    <div key={movie.id} className="d-flex my-3 border">

                        <img src={`http://localhost:3000/movies_images/${movie.image}`} className="card-img-top" alt="" />

                        <div className="mx-3">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.abstract}</p>
                            <a href="#" className="btn btn-primary">Movie details</a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}