import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import './App.css'
import {DB} from './firebase'
import Header from './components/layoout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'


class App extends Component{
  state = {
    todos: []
  }

  componentDidMount(){
    DB.collection('todos').onSnapshot(querySnapshot => {
      let filler = []
      querySnapshot.forEach( doc => {
        filler.push({
          id: doc.id,
          title: doc.data().title,
          completed: doc.data().completed
        })
      })
      this.setState({todos: filler})
    })
  }

  markComplete = (id, completed) => {
    DB.collection('todos').doc(id).update({
      completed: !completed
    })
  }

  delTodo = (id) => {
    DB.collection('todos').doc(id).delete()
  }



  addTodo = (title) => {
    DB.collection('todos').doc().set({
      title: title,
      completed: false
    })
    
  }

  render(){
    console.log(this.state.todos)
    return (
    <Router>
      <div className="App">
        <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} 
                  delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
        </div>
      </div>
   </Router>
  );
}


}

export default App;
