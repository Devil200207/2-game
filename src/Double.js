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
                  <input style={{marginLeft:-20}} type={"button"} onClick={this.increaseByTwo} value="Add 2"/>
                  <input type={"button"} onClick={this.dereaseByTwo} value="Subtract 2"/>
                  <input type={"button"} onClick={this.multiplyByTwo} value="Multiply by 2"/>
                  <input type={"button"} onClick={this.devideByTwo} value="Divide by 2"/>
                </div>
            </div>
        );
    }
}

export default Doubletem;