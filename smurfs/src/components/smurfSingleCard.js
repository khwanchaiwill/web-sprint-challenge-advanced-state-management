import React from 'react'
import { useParams } from 'react-router-dom'

const SmurfSingleCard = (props) => {
    console.log(props)
    const { smurfId } = useParams()

    const cards = props.smurf.find(card => {
        return card.id == smurfId
    })

    if(!cards){
        return "Looking for the card"
    }
    return (
        <div className="single-card">
            <div className="card">
                <h1> Name: {cards.name} </h1>
                <h2> Age: {cards.age} </h2>
                <h3> height: {cards.height} </h3>
            </div>
        </div>
    )

}
export default SmurfSingleCard;