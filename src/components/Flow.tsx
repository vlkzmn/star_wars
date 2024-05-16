'use client';

import React from 'react';
import ReactFlow, { Background, Controls, useReactFlow } from 'reactflow';
import {
  CustomCharacterNode,
  CustomFilmNode,
  CustomStarShipNode,
} from '../components/CustomNodes';
import { Edge } from '@/types/Edge';
import { Node } from '@/types/Node';
import 'reactflow/dist/style.css';

/**
 * SetFitView component sets the React Flow view to fit all nodes and edges.
 * It uses a timeout to ensure the view fitting is executed after the initial render.
 */

function SetFitView() {
  const reactFlow = useReactFlow();
  setTimeout(reactFlow.fitView);
  return <></>;
}

/**
 * Flow component renders a React Flow diagram with custom nodes and edges.
 *
 * @component
 * @param {Object} props - The component props
 * @param {Node[]} props.nodes - An array of nodes to display in the flow diagram
 * @param {Edge[]} props.edges - An array of edges to display in the flow diagram
 * @returns {JSX.Element} The rendered component
 * @example
 * // Usage example:
 * const nodes = [ ... ];
 * const edges = [ ... ];
 *
 * <Flow nodes={nodes} edges={edges} />
 */

// Define custom node types
const nodeTypes = {
  character: CustomCharacterNode,
  film: CustomFilmNode,
  starShip: CustomStarShipNode,
};

export default function Flow({
  nodes,
  edges,
}: {
  nodes: Node[];
  edges: Edge[];
}): JSX.Element {
  const edgeOptions = {
    animated: true,
    style: {
      stroke: '#777777',
    },
  };

  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeOptions}
        elementsSelectable={false}
      >
        <Background />
        <Controls showInteractive={false} />
        <SetFitView />
      </ReactFlow>
    </div>
  );
}
