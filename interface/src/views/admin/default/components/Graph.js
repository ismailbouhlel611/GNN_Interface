import React from 'react';
import './Graph.css';
import nodesData from './nodes22.json';
import edgesData from './edges.json';
import Graph from 'vis-eact';

    var nodes = nodesData;
    var edges = edgesData;
    const data = {
      nodes: nodes,
      edges: edges
    };


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

    export default function MyVisComponent(props){
      
      return(
        
        <div className='mynetwork' >
          <Graph
            graph={data}
            options={options}
            events={events}
            // style={style}
            // getNetwork={this.getNetwork}
            // getEdges={this.getEdges}
            // getNodes={this.getNodes}
            // vis={vis => (this.vis = vis)}
    />
        </div>
      )
    }
  


