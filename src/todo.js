import React from 'react';

export class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>List:</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              ¿What do you want to add?
            </label><n/>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add Item #{this.state.items.length + 1}
            </button>
          </form>
          <br/>
          <h3>Marque las tareas completadas:</h3><br/>
          <input
            type="checkbox"/>
          <label>Task1</label><br/>
          <input
            type="checkbox"/>
          <label>Task2</label><br/>
          <input
            type="checkbox"/>
          <label>Task3</label><br/>
          <input
            type="checkbox"/>
          <label>Task4</label><br/>
          <input
            type="checkbox"/>
          <label>Task5</label><br/>
          <input
            type="checkbox"/>
          <label>Task6</label><br/>
          <input
            type="checkbox"/>
          <label>Task7</label><br/>        
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
 
  