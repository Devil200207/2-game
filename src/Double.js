import React from "react";

class Doubletem extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            digit: 1
        }
    }

    increaseByTwo = () =>
    {
        this.setState({
            digit:this.state.digit + 2
        });
    }
    dereaseByTwo = () =>
    {
        this.setState({
            digit:this.state.digit -2
        });
    }
    multiplyByTwo = () =>
    {
        this.setState({
            digit:this.state.digit *2
        });
    }
    devideByTwo = () =>
    {
        this.setState({
            digit:this.state.digit /2
        });
    }

    render()
    {
        const {digit} = this.state;
        return(
            <div className="view-area">
                <div>{digit}</div>
                <div>
                    <input type={"button"} onClick={this.increaseByTwo}> +2 </input>
                    <input type={"button"} onClick={this.dereaseByTwo}> -2 </input>
                    <input type={"button"} onClick={this.multiplyByTwo}> *2 </input>
                    <input type={"button"} onClick={this.devideByTwo}> /2 </input>
                </div>
            </div>
        );
    }
}

export default Doubletem;