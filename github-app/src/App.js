import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
    state = {
      gitHub: [],
      users: ''
    }

    componentDidMount() {
      axios.get('https://api.github.com/users/Broveku')
          .then(res=> {
            this.setState({
              ...this.state,
              gitHub:res.data.message
              
            })
            
          })
          .catch(err=>{
            console.log(err)
          })
          
    }

    handleChange = (e) =>{
      this.setState({
        ...this.state,
        users:e.target.value
        
      })
      
    }

    handleClick = (e) =>{
      e.preventDefault()
      axios.get(`https://api.github.com/users/${this.state.users}`)
          .then(res =>{
            this.setState({
              ...this.state,
              gitHub: res.data.message
            })
          })
          .catch(err =>{
            console.log(err)
          })
          
    }




    render(){
      return(<div>
          <h1>Github Profiles</h1>
          <form>
            <input onChange={this.handleChange}/>
            <button onClick={this.handleClick}>search</button>
          </form>
          <div id='profile'>
            
              <h2>Location{this.state.users.location}</h2>

            
          </div>
      </div>)
    }
}

export default App;
