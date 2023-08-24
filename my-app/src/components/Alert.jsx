import React from "react";

class Alert extends React.Component {
    render() {
        const { text, type } = this.props;
        const alertClassName = `alert alert-${type}`;

        return (
            <div className={alertClassName} role="alert">
                {text}
            </div>
        )
    }
}

export default Alert;