import React, { Component } from 'react';
import $ from 'jquery';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'LifeCycle'
        };

        this.handleChangeTitle= this.handleChangeTitle.bind(this);
        console.log('Call contructor...');
    }

    componentDidMount() {
        $("h3.panel-title").css('color', 'white');
    }

    componentWillMount() {
        console.log('Call componentWillMount...');
        this.setState({
            title: 'LifeCycle... componentWillMount'
        });
    }

    handleChangeTitle(){
        this.setState({
            title: "LifeCycle Components..."
        })
    }

  render() {
    console.log('Call render...');
    return (
        <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">{this.state.title}</h3>
        </div>
        <div className="panel-body">
          <p> {this.props.time}</p>
          <p>{this.props.children}</p>
          <p> <button onClick={this.handleChangeTitle} type="button" className="btn btn-success">Change title</button></p>
        </div>
    </div>
    );
  }
}

export default LifeCycle;
