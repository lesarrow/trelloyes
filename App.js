import React from 'react';
import List from './List';
import Card from './Card';
import './App.css';

function buildCardObjList(header, allCards, cardIdList) {

  let retval = {
    header: header,
    cards: []
  };

  for (let i=0; i<cardIdList.length; i++) {

    retval.cards.push(allCards[cardIdList[i]]);
  }

  return retval;

}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}


class App extends React.Component {


  constructor(props) {
    super(props);
    this.onAddRandomCard = this.onAddRandomCard.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
  }
   
  arrayOfCardLists() {
    
    return this.props.store.lists.map(list => {
      return buildCardObjList(list.header, this.props.store.allCards, list.cardIds)
    });
  }


  state = {
    listsOfCardLists: this.arrayOfCardLists()
  }

  onDeleteCard(cardTitle) {

    let newCards=[];
    for (let i=0; i<this.state.listsOfCardLists.length; i++) {

      newCards = this.state.listsOfCardLists[i].cards.filter(card => card.title != cardTitle);
      this.state.listsOfCardLists[i].cards = newCards;
    }

    this.setState({
      listsOfCardLists: this.state.listsOfCardLists
    })
  }

  onAddRandomCard(id) {

    const card = newRandomCard();

    this.state.listsOfCardLists[id].cards.push(card);

    this.setState({
      listsOfCardLists: this.state.listsOfCardLists
    });

  }

 
  render() {

    this.arrayOfLists = this.state.listsOfCardLists.map((cardList, i) => {
      return <List header={cardList.header} cards={cardList.cards} key={i} index={i} onDelete={this.onDeleteCard} onAdd={this.onAddRandomCard}/>
    });

    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.arrayOfLists}
        </div>
      </main>
    );
  }
}

export default App;
