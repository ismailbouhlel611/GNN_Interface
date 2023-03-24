import vis from 'vis';
import React from 'react';
import './Graph.css'

export default class MyVisComponent extends React.Component {
    // ... component code here ...
    componentDidMount() {
        // create a new network instance
        const container = document.getElementById('mynetwork');
        const data = {
          nodes: [
            { id: 1, label: 'Node 1' },
            { id: 2, label: 'Node 2' },
            { id: 3, label: 'Node 3' },
            { id: 4, label: 'Node 4' },
            { id: 5, label: 'Node 5' }
          ],
          edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
          ]
        };
        const options = {};
        const network = new vis.Network(container, data, options);
      };
    render() {
        return (
          <div>
            <div id="mynetwork" ></div>
          </div>
        );
      };
  }
