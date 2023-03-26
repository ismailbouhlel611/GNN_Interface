import vis from 'vis';
import React, { useState, useEffect } from 'react';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';
import './Graph.css';
import nodesData from './nodes22.json';
import edgesData from './edges.json';

console.log(nodesData.label);

export default class MyVisComponent extends React.Component {
  // ... component code here ...
  componentDidMount() {
    // create a new network instance
    var nodes=nodesData;
    var edges=edgesData;
    const container = document.getElementById('mynetwork');
    const data = {
      nodes:nodes,
      edges: edges
    };

    
    const options = {
      "edges": {
        "smooth": {
          "forceDirection": "none"
        }
      },
      "physics": {
        "barnesHut": {
          "gravitationalConstant": -17300,
          "centralGravity": 0,
          "springConstant": 0.05,
          "avoidOverlap": 0.12
        },
        "maxVelocity": 0.1,
        "minVelocity": 0
      }
    };
    
    const network = new vis.Network(container, data, options);
  };
  render() {
    return (
      <div>
        <div id="mynetwork" ></div>
      </div>
    );
  }
  
}
