import React from "react";

export class PokeApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { pokemons: [] };
      
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
          .then((response) => {
            return response.json()
          }
          ).then(data => console.log(data))
          .then((pokemons) => {
            this.setState({ pokemons: [pokemons] })
          })
          .catch(err => console.log(err));
          
          
        }
       

    

      
    render() {
        if (this.state.pokemons.length > 0) {
          return (
            <div className = "App">
            <h1> Lista Pokemon</h1>  {
                this.state.pokemons.map((item) => ( 
                <ol key = { item.id } >
                    Nombre: { item.username }, 
                </ol>
                ))
            }
        </div>
          );
        } else {
          return <p className="text-center">Loading...</p>;
        }
      }
    
  }

