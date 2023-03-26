import './style.css';
import ReactFlow, { Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { edges } from './edges';
import { nodes } from './nodes';
import CustomNode from './customNode';
import { useMemo } from 'react';

const Flow = () => {
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  return (
    <div style={{ height: '89%' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Controls position='bottom-right' />
      </ReactFlow>
    </div>
  );
};

export default Flow;
