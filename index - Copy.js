import React from "react"


export default class Menu extends React.Component {
    render() {
        return (
            <div><p>${this.props.itemPrice}</p>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                <p><button>Add to cart</button></p></div>
        );
        
    }
    
}
