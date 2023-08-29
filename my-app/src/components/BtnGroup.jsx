import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: null,
        };
    }

    handleButtonClick = (buttonName) => {
        this.setState({ activeBtn: buttonName });
    };

    render() {
        const { activeBtn } = this.state;
        const btnLeftClass = classNames("btn ", {
            "btn-primary": activeBtn === "left",
        });

        const btnRightClass = classNames("btn ", {
            "btn-primary": activeBtn === "right",
        });

        return (
            <div className="btn-group" role="group">
                <button type="button" className={btnLeftClass} onClick={() => this.handleButtonClick("left")}>Left</button>
                <button type="button" className={btnRightClass} onClick={() => this.handleButtonClick("right")}>Right</button>
            </div>
        )
    }
}

export default BtnGroup;