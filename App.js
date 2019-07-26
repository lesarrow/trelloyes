import React from 'react';
import List from './List';
import './App.css';

function buildCardObjList(allCards, cardIdList) {

  let retval = [];

  for (let i=0; i<cardIdList.length; i++) {

    retval.push(allCards[cardIdList[i]]);
  }

  return retval;

}


function App(props) {

  const arrayOfLists = props.store.lists.map(list => {

    return (
      <List header={list.header} cards={buildCardObjList(props.store.allCards, list.cardIds)} />
    );

  });

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {arrayOfLists}
      </div>
    </main>
  );
}

export default App;
