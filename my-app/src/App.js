import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Course from './components/Course';

class App extends Component {
  render() {
    const items = [
      { name: 'React JS',
        time: '20h',
        free: false, 
        desc: 'Reat Js very simple'
      },
      { name: 'Angular JS',
        time: '50h',
        free: true, 
      },
      { name: 'Node JS',
        time: '30h',
        free: true, 
      },
    ];

    const elmCourses = items.map((item, index) =>
        <Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
  );
    return (
      <div className="row">
        {elmCourses}
    </div>
    );
  }
}

export default App;
