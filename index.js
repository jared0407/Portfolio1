import React from "react"
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.menuName} List</h1>
                <hr></hr>
                <MenuItem {...this.props.menuItems[0]}></MenuItem>
                <MenuItem {...this.props.menuItems[1]}></MenuItem>
                <MenuItem {...this.props.menuItems[2]}></MenuItem>
            </div>
        )
    }
    
}