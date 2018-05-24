import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      isShowToogleOutline: false,
      totalStudent: 60
    };

    this.handleClick3 = this.handleClick3.bind(this);
    this.registerCourse = this.registerCourse.bind(this);
    this.handleClickToogleOutline = this.handleClickToogleOutline.bind(this);
  }

  handleClick1(){
   alert("hello world");
  }

  handleClick2(content){
    alert(content);
   }

   handleClick3(){
    alert(this.props.name);
   }

   registerCourse(){
     console.log(this.refs.userName.value);
   }

  showButtonFree() {
    const isFree = this.props.free;
    if(isFree === true){
      return  (
            <div className="btn-group">
              <button onClick={this.handleClick1} type="button" className="btn btn-warning">Register</button>
              <button onClick={() => this.handleClick2("Hello click 2")} type="button" className="btn btn-danger">Register</button>
              <button onClick={this.handleClick3} type="button" className="btn btn-success">Register</button>
            </div>
            );
    } else {
        return (
              <div className="input-group">
                <span className="input-group-btn">
                  <button onClick={this.registerCourse} className="btn btn-info" type="button">Register</button>
                </span>
                <input type="text" className="form-control" placeholder="userName" ref="userName"/>
                </div>
              );
    }
  }

  handleClickToogleOutline() {
    this.setState({
      isShowToogleOutline: !this.state.isShowToogleOutline
    });
  }

  render() {
    let elementOutline = null;
    if(this.state.isShowToogleOutline){
      elementOutline  = <ul className="list-group">
                          <Lesson />
                          <Lesson />
                          <Lesson />
                        </ul>;
    }
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">{this.props.name}</h3>
              </div>
              <div className="panel-body">
                <p> {this.props.time}</p>
                <p>{this.props.children}</p>
                <p> <button onClick={this.handleClickToogleOutline} type="button" className="btn btn-success">Toogle Outline</button></p>
                {elementOutline}
              </div>
              <div className="panel-footer">
                {this.showButtonFree()}
              </div>
          </div>
        </div>
    );
  }
}

export default Course;
