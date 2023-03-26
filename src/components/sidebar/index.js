import './style.css';
import SidebarLogo1 from '../../assets/SidebarLogo1.svg';
import SidebarLogo2 from '../../assets/SidebarLogo2.svg';
import SidebarLogo3 from '../../assets/SidebarLogo3.svg';
import SidebarLogo4 from '../../assets/SidebarLogo4.svg';
import SidebarLogo5 from '../../assets/SidebarLogo5.svg';
import SidebarLogo6 from '../../assets/SidebarLogo6.svg';
import Notification from '../../assets/Notification.svg';
import Profile from '../../assets/Profile.svg';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className='sidebarContainer'>
      <div className='topDiv d-flex justify-content-center align-items-center'>
        <div className='circle'></div>
      </div>
      <div className='navigationsDiv'>
        <button className='sidebarLogos' onClick={() => navigate('/not-found')}>
          <img className='logo' src={SidebarLogo1} alt='' />
        </button>
        <button className='sidebarLogos' onClick={() => navigate('/not-found')}>
          <img className='logo' src={SidebarLogo2} alt='' />
        </button>
        <button className='sidebarLogos' onClick={() => navigate('/not-found')}>
          <img className='logo logo3' src={SidebarLogo3} alt='' />
        </button>
        <button className='sidebarLogos' onClick={() => navigate('/not-found')}>
          <img className='logo' src={SidebarLogo4} alt='' />
        </button>
        <button
          className='sidebarLogos logo5'
          onClick={() => navigate('/people')}
        >
          <img className='logo' src={SidebarLogo5} alt='' />
        </button>
        <button className='sidebarLogos' onClick={() => navigate('/not-found')}>
          <img className='logo' src={SidebarLogo6} alt='' />
        </button>
      </div>
      <div className='bottomDiv'>
        <button className='sidebarLogos' onClick={() => navigate('/not-found')}>
          <img className='logo' src={Notification} alt='' />
        </button>
        <button className='sidebarLogos' onClick={() => navigate('/not-found')}>
          <img className='logo' src={Profile} alt='' />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
