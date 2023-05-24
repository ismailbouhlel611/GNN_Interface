import React from 'react';
import './Graph.css';
import nodesData from './nodes22.json';
import edgesData from './edges.json';
// import Graph from 'vis-react';
import { useEffect, useState } from 'react';
import Graph from 'react-graph-vis';
 

const MyVisComponent = (props) => {
  const nodes = Array.from(Object.values(props))
    .flatMap((entry) => entry.map((obj) => obj['Full name']));
  console.log(nodes); // array of full names

  // build edges based on Kmeans labels
  const edges = [];
  const groups = Array.from(props.values());
  for (let i = 0; i < groups.length; i++) {
    const group1 = groups[i];
    for (let j = i + 1; j < groups.length; j++) {
      const group2 = groups[j];
      if (group1[0]['Kmeans labels'] === group2[0]['Kmeans labels']) {
        group1.forEach((node1) => {
          group2.forEach((node2) => {
            edges.push({ from: node1['Full name'], to: node2['Full name'] });
          });
        });
      }
    }
  }
  console.log(edges); // array of edges between nodes with the same Kmeans labels

  // create graph data object
  const data = { nodes, edges };
  const options = {
    edges: {
      smooth: {
        forceDirection: "none",
        
      },
      color:"#1E2E7A",
      arrows:{
        to:false,
        from:false
      },
    },
    height: "100%",
    width: "100%",
    autoResize:true,
    arrowStrikethrough: true,
    chosen: true,
    dashes: false,
    physics: {
      barnesHut: {
        // gravitationalConstant: -10000,
        centralGravity: 1,
        springConstant: 0.00000000000001,
        avoidOverlap: 0.1
      },
      
      // maxVelocity: 0.5,
      // minVelocity: 0
    },
    hierarchical: {
      enabled: true,
      levelSeparation: 400,
      nodeSpacing: 200,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',
      sortMethod: 'hubsize',
      shakeTowards: 'roots'
    },
    randomSeed: 2,
    nodes: {
      fixed: {
        x: false,
        y: false
      },
      shape: "eclipse",
      size: 13,
      borderWidth: 1.5,
      borderWidthSelected: 2,
      font: {
        size: 15,
        align: "center",
        bold: {
          color: "#bbbdc0",
          size: 15,
          vadjust: 0,
          mod: "bold"
        }
      }
    },
   
    }
 
  var events = {
    select: function(event) {
        var { nodes, edges } = event;
    }
};
  return (
    <div className='mynetwork'>
      <Graph
        graph={data}
        options={options}
        events={events}
      />
    </div>
  );
};

export default MyVisComponent;

  



