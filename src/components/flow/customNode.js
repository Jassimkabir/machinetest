import { Handle, Position } from 'reactflow';
import './style.css';

const CustomNode = ({ data }) => {
  console.log(data);
  return (
    <>
      <Handle
        type='target'
        position={Position.Top}
        style={{ visibility: 'hidden' }}
      />
      <div className='nodeContainer'>
        <div className='customNode'>
          <button className='threeDotMenu'>...</button>
          <div className='section w-100 d-flex flex-column justify-content-center align-items-center'>
            <span className='name'>{data?.name}</span>
            <span className='position'>{data?.position}</span>
          </div>
        </div>
        <div className='avatar'>
          <img src={data?.avatar} alt='' />
        </div>
      </div>
      <Handle
        type='source'
        className='d-flex justify-content-center align-items-center'
        position={Position.Bottom}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '6px',
          background: '#ffffff',
          border: '1px solid #EDEAE9',
          bottom: '-10px',
        }}
      >
        +
      </Handle>
    </>
  );
};

export default CustomNode;
