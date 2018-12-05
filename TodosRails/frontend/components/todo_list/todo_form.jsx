import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {    //react component local state
      title: '',
      body: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(key) {
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const id = new Date().getTime();
    const copyTodo = Object.assign( {}, this.state, { id: id } );
    this.props.receiveTodo(copyTodo);   //redux, dispatch(action) => trigger a change in the REDUX store

    this.setState({                     //reset the react component local state
      title: '',
      body: ''
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <br />
            <input type="text" name="title" value={this.state.title} onChange={this.update("title")} />
          </label>
<br />
<br />
          <label>
            Body
            <br />
            <textarea rows="8" cols="30" name="body" value={this.state.body} onChange={this.update("body")} />
          </label>
<br />
<br />
          <input type='submit' value="Create Todo"></input>
        </form>
      </div>
    );
  }
}

export default TodoForm;
