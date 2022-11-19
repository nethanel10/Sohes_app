import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const Shoe = () => {
    
    const {id} = useParams()
    const [shoeData, setShoeData] = useState()
    const [feedback, setFeedback] = useState({
        color: "blue",
        content: ""
    })
    
    const fetchData = async () => {
        try {
            let res = await axios.get(`https://6374a45108104a9c5f84c771.mockapi.io/sohoesstore/${id || 1}`)
            setShoeData(res.data)
        }
        catch(err) {
            throw err
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const deleteShoe = async () => {
        try {
            await axios.delete(`https://6374a45108104a9c5f84c771.mockapi.io/sohoesstore/${id}`)
            setFeedback({
                color: "green",
                content: "shoe deleted successfully"
            })
        }
        catch(err) {
            setFeedback({
                color: "red",
                content: "error while deleting shoe"
            })
        }
    }

    const updateShoe = async () => {
        try {
            await axios.put(`https://6374a45108104a9c5f84c771.mockapi.io/sohoesstore/${id}`, {...shoeData})
            setFeedback({
                color: "green",
                content: "shoe updated successfully"
            })
        }
        catch(err) {
            setFeedback({
                color: "red",
                content: "error while updating shoe"
            })
        }
    }

    if (shoeData) return (
        <div className="shoeDetails">
            <h1>{shoeData.name} details:</h1>
            <div className="shoeDetails__content">
                <div className="shoeDetails__input">
                <label htmlFor="name">Name:</label>
                <input type="text" value={shoeData.name} name="name" onChange={(e) => setShoeData({...shoeData, [e.target.name]: e.target.value})} />
                </div>
                <div className="shoeDetails__input">
                <label htmlFor="price">Price:</label>
                <input type="text" value={shoeData.price} name="price" onChange={(e) => setShoeData({...shoeData, [e.target.name]: e.target.value})} />
                </div>
                <div className="shoeDetails__input">
                <label htmlFor="img">Image URL:</label>
                <input type="text" value={shoeData.img} name="img" onChange={(e) => setShoeData({...shoeData, [e.target.name]: e.target.value})} />
                </div>
            </div>
            <div className="shoeDetails__actions">
                <button className="btn btn__delete" onClick={() => {deleteShoe()}}>Delete Shoe</button>
                <button className="btn btn__delete" onClick={() => {updateShoe()}}>Update Shoe</button>
            </div>
            <p style={{color: feedback.color}}>{feedback.content}</p>
        </div>
    )
    return (
        <h1>Loading...</h1>
    )
}

export default Shoe