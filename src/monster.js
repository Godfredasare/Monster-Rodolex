import React from 'react';
import { CardList } from './component/card-list/-card-list-component'
import { SearchBox } from './component/card-list/search-component/search-box'
import './monster.css'

class Monster extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            seachField:''
        }
    }
    //fetching data from the source that will be use by the monster state
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users=>this.setState({monsters:users}))
    }
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    //filter out the card component
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField)
     );
        return <div>
        <h1>Monsters Rolodex</h1>
            <SearchBox
                placeholder='search monster'
                handleChange={this.handleChange}
                 />
            <CardList monsters={filteredMonsters} />      
        </div>
        
    }
}
 
export default Monster;