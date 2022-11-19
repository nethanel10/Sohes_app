import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Shoes = () => {
    
    const [shoes, setShoes] = useState()
    const fetchData = async () => {
        try {
            let res = await axios.get("https://6374a45108104a9c5f84c771.mockapi.io/sohoesstore")
            setShoes(res.data)
        }
        catch(err) {
            throw err
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(shoes) return (
        <div className='shoes'>
            {shoes.map(shoe => <Link to={`/shoes/${shoe.id}`} className="shoe"><h3>{shoe.name}</h3> <h3>{shoe.price}</h3> <img src={shoe.img} alt="" /> </Link>)}
        </div>
    )
    return (
        <h1>Loading...</h1>
    )
}

export default Shoes