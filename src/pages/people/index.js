import SideBar from '../../components/sidebar';
import './style.css';
import Search from '../../assets/Search.svg';

const People = () => {
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
            <button className='filterButton p-1'>Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
