import React from "react";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: props.opened !== undefined ? props.opened : true,
        };
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({
            isOpened: !prevState.isOpened,
        }));
    };

    render() {
        const {text} = this.props;
        const {isOpened} = this.state;

        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={isOpened ? 'true' : 'false'}
                        onClick={this.toggleCollapse}
                    >
                        {isOpened ? 'Close Link' : 'Open Link'}
                    </a>
                </p>
                <div className={`collapse${isOpened ? ' show' : ''}`}>
                    <div className="card card-body" style={{color: 'black'}}>{text}</div>
                </div>
            </div>
        );
    }
}

export default Collapse;