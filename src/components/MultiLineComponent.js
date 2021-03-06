import React, {Component} from 'react';

class MultiLineComponent extends Component{
    render(){
        return (
            <div>
                {
                    this.props.lines.map((line, index)=>{
                        return (<p key={index}>{line}</p>);
                    })
                }
            </div>
        );
    }
}

export default MultiLineComponent;