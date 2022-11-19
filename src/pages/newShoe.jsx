import axios from "axios"
import { useState } from "react"

const NewShoe = () => {
    
    const [shoeData, setShoeData] = useState(
        {
            name: "new shoe",
            price: "100$",
            img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
        }
    )
    const [feedback, setFeedback] = useState({
        color: "blue",
        content: ""
    })

    const addShoe = async () => {
        try {
            await axios.post("https://6374a45108104a9c5f84c771.mockapi.io/sohoesstore", {...shoeData})
            setFeedback({
                color: "green",
                content: "shoe added successfully"
            })
        }
        catch(err) {
            setFeedback({
                color: "red",
                content: "error while adding shoe."
            })
        }
    }
    return (
        <div className="newShoe">
            <div className="shoeDetails__content">
                <label htmlFor="name">Name:</label>
                <input type="text" value={shoeData.name} name="name" onChange={(e) => setShoeData({...shoeData, [e.target.name]: e.target.value})} />
                <label htmlFor="price">Price:</label>
                <input type="text" value={shoeData.price} name="price" onChange={(e) => setShoeData({...shoeData, [e.target.name]: e.target.value})} />
                <label htmlFor="img">Image URL:</label>
                <input type="text" value={shoeData.img} name="img" onChange={(e) => setShoeData({...shoeData, [e.target.name]: e.target.value})} />
            </div>
            <button onClick={() => {addShoe()}}>Add Shoe</button>
            <p style={{color: feedback.color}}>{feedback.content}</p>
        </div>
    )
}

export default NewShoe