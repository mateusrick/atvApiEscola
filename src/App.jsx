import { useState } from 'react';
import './App.css';
import Cantores from './components/Cantores';
import Atores from './components/Atores';
import Atletas from './components/Atletas';
import AtoresMirins from './components/AtoresMirins';
import Modelos from './components/Modelos';
import Streamers from './components/Streamers';
import Influencers from './components/Influencers';
import Youtubers from './components/Youtubers';
import Card from './components/Card';




function App() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  function handleChangeTab(tabName) {
    setActiveTab(tabName);
  }

  function renderTabContent() {
    switch (activeTab) {
      case 'Tab 1':
        return <section className=''><Cantores /></section>;
      case 'Tab 2':
        return <section className=''><Atores /></section>;
      case 'Tab 3':
        return <section className=''><Atletas /></section>;
      case 'Tab 4':
        return <section className=''><AtoresMirins /></section>;
      case 'Tab 5':
        return <section className=''><Modelos /></section>;
      case 'Tab 6':
        return <section className=''><Streamers /></section>;
      case 'Tab 7':
        return <section className=''><Influencers /></section>;
      case 'Tab 8':
        return <section className=''><Youtubers /></section>;
      case 'Tab 9':
        return <section className='cards'><Card /></section>;
      default:
        return null;
    }
  }

  return (
    <>
      <h1>FAMOSO</h1>
      
      <section className='knockout_table'>
        
        <div className='tabs'>
          <button
            className={activeTab === 'Tab 1' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 1')}
          >
            Cantores
          </button>
          <button
            className={activeTab === 'Tab 2' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 2')}
          >
            Atores
          </button>
          <button
            className={activeTab === 'Tab 3' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 3')}
          >
            Atletas
          </button>
          <button
            className={activeTab === 'Tab 4' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 4')}
          >
            Atores Mirins
          </button>
          <button
            className={activeTab === 'Tab 5' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 5')}
          >
            Modelos
          </button>
          <button
            className={activeTab === 'Tab 6' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 6')}
          >
            Streamers
          </button>
          <button
            className={activeTab === 'Tab 7' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 7')}
          >
            Influencers
          </button>
          <button
            className={activeTab === 'Tab 8' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 8')}
          >
            Youtubers
          </button>
          <button
            className={activeTab === 'Tab 9' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 9')}
          >
            Grupos
          </button>
        </div>

        <div className='tab_content'>
          {renderTabContent()}
        </div>

      </section>

    </>
  );
}

export default App;
