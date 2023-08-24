import React from "react";

class ListGroup extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {React.Children.map(this.props.children, child => (
                    <li className="list-group-item">{child}</li>
                ))}
            </ul>
        )
    }
}

export default ListGroup;