import SideBar from '../../components/sidebar';
import './style.css';

const NotFound = () => {
  return (
    <div className='d-flex'>
      <SideBar />
      <div className='notFoundContainer d-flex justify-content-center align-items-center'>
        <h1>Page not found!</h1>
      </div>
    </div>
  );
};

export default NotFound;
