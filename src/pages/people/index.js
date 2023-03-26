import SideBar from '../../components/sidebar';
import './style.css';
import Search from '../../assets/Search.svg';
import Filter from '../../assets/Filter.svg';
import FlowIcon from '../../assets/Flow.svg';
import Grid from '../../assets/Grid.svg';
import List from '../../assets/List.svg';
import { useState } from 'react';
import Flow from '../../components/flow';

const People = () => {
  const [view, setView] = useState('flow');

  return (
    <div className='d-flex'>
      <SideBar />
      <div className='peopleContainer'>
        <div className='topBar w-100 d-flex justify-content-between align-items-center'>
          <div className='titleDiv d-flex align-items-center'>
            <span className='title'>People</span>
            <button className='addButton'>+</button>
          </div>
          <div className='searchDiv d-flex align-items-center'>
            <div className='searchBox d-flex align-items-center py-1 px-2'>
              <img src={Search} alt='' />
              <input className='h-20' type='text' placeholder='Search' />
            </div>
            <button className='filterButton p-1 d-flex align-items-center'>
              <img src={Filter} alt='' />
              Filter
            </button>
          </div>
        </div>
        <div className='viewsToggleDiv'>
          <button
            className={`viewButton ${view === 'list' && 'activeButton'}`}
            onClick={() => setView('list')}
          >
            <img src={List} alt='list' />
          </button>
          <button
            className={`viewButton ${view === 'grid' && 'activeButton'}`}
            onClick={() => setView('grid')}
          >
            <img src={Grid} alt='grid' />
          </button>
          <button
            className={`viewButton ${view === 'flow' && 'activeButton'}`}
            onClick={() => setView('flow')}
          >
            <img src={FlowIcon} alt='flow' />
          </button>
        </div>
        {view === 'flow' && <Flow />}
        {(view === 'grid' || view === 'list') && (
          <div
            style={{ height: '89%' }}
            className='d-flex justify-content-center align-items-center'
          >
            <h1>
              {view === 'grid'
                ? 'Grid view not available!'
                : 'List view not available!'}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default People;
