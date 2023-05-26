import { Box, useColorModeValue, Button } from "@chakra-ui/react";
import MyVisComponent from './components/Graph';
import React, { useState } from "react";
import './index.css';
import * as d3 from 'd3';
import {
	Text,
} from '@chakra-ui/react';
import data2 from './data_2_clusters.json';
import data3 from './data_3_clusters.json';
import data4 from './data_4_clusters.json';
import data5 from './data_5_clusters.json';
import edge2 from './data2.json';
import edge3 from './data3.json';
import edge4 from './data4.json';
import edge5 from './data5.json';
import Graph from 'react-graph-vis';

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	let menuBg = useColorModeValue('white', 'navy.800');
  const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  const shadow = useColorModeValue(
		'14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
		'14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
	);
  const [numberOfClusters, setNumberOfClusters] = useState("");
  const [group, setGroup] = useState("");
  const [level, setLevel] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  
  const handleClick = () => {
    setButtonClicked(true);
  };

  const handleIIButtonClick = (value) => {
    setLevel(value);
    if (buttonClicked){
      window.location.reload(false);
    }
  };

  const handleGroupButtonClick = (value) => {
    setGroup(value)
    setSpecialization('')
  };

  const handleSpesButtonClick = (value) => {
    setGroup('')
    setSpecialization(value)
  };

  const handleNumClustersChange = (value) => {
    setNumberOfClusters(value);
  };

  let data;
  let edgees;
  if (numberOfClusters === "2") {
    data = data2
    edgees = edge2
  } else if (numberOfClusters === "3") {
    data = data3
    edgees = edge3

  } else if (numberOfClusters === "4") {
    data = data4
    edgees = edge4

  } else {
    data = data5
    edgees = edge5

  }
  


  function filterDataByCriteria(data, group, level, specialization) {
    return data.filter(d => (d.Group === group && d.Level === level) || (d.Major === specialization && d.Level === level));
  }
  
  const filteredData = filterDataByCriteria(data, group, level, specialization);
  console.log(filteredData)
  
  const groupedData = d3.group(filteredData, d => d['Kmeans labels']);
  console.log(groupedData)

  // #########################################

// const nodes = [...groupedData.flatMap((lis1)=>(lis1[1]))]
let nodes = [];
 

for (const arr of groupedData) {
  nodes.push(...arr.map(obj => obj));
}
const filteredNodes = nodes.filter(value => value !== undefined && typeof value !== 'number' );
console.log("this is nodes " , filteredNodes)


const fullNames=[]
for (const arr of filteredNodes) {
  fullNames.push(...arr.map(obj => obj['id']));
}
let edges = []
for (const obj of edgees) {
  if (fullNames.includes(obj['from']) && fullNames.includes(obj['to'])) {
    edges.push(obj);
  }}
console.log("edges",edges)
const nodees = filteredNodes.flat();
// create graph data object
const data1 = {nodes: nodees, edges:edges };
console.log("data1",data1)
const options = {
  groups:{
    0: {
      color : {
        background:'#2a896a',
        
        highlight:{
          border: "#5a85a2",
          background:"#2a896a"
        }
      },
      
    },
    1: {
      color : {
        background:'#bb7e1b'
      }
  },
  2 :{
    color : {
      background :"#bb1b3b"
    }
  },
  3 :{
    color : {
      background :"#3bbb1b"
    }
  },
  4 :{
    color : {
      background :"#bb1b9a"
    }
  },
},
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
      var { nodees, edges } = event;
  }
}
  return (
    <>
    <div className="graph_container">
    {/* {buttonClicked && <MyVisComponent myProp={myProp} />} */}
    {buttonClicked && 
    <div className='mynetwork'>
      <Graph
        graph={data1}
        options={options}
        events={events}
      />
    </div>}
    {/* {!buttonClicked && <MyVisComponent />} */}
    {/* {buttonClicked && <MyVisComponent myProp={myProp} />} */}
    </div>
    <div style={{marginTop:'20px' ,display: 'grid', gridTemplateColumns: 'repeat(1, 3fr)', gridGap: '15px', marginLeft:'400px'}}>
    <Box mb={4} >
    <Text fontSize="md" fontWeight="600" color={textColor}>
							Level :
              <br/>
		</Text>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleIIButtonClick('II1')}>
      II1
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleIIButtonClick('II2')}>
      II2
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleIIButtonClick('II3')}>
      II3
    </Button>
  </Box>
  <Box mb={4}> 
    {level !== "II3" ? (
      <>
    <Text fontSize="md" fontWeight="600" color={textColor}>
							Group :
              <br/>
		</Text>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleGroupButtonClick('A')}>
      A
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleGroupButtonClick('B')}>
      B
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleGroupButtonClick('C')}>
      C
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleGroupButtonClick('D')}>
      D
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleGroupButtonClick('E')}>
      E
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleGroupButtonClick('F')}>
      F
    </Button>
    </>
    ) : null}
  </Box>
  {level !== "II1" ? (
  <Box mb={4}>
  <Text fontSize="md" fontWeight="600" color={textColor}>
              Specialization :
              <br/>
		</Text>
    {level === "II2" ? (
  <>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('GL1')}>
      GL1
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('GL2')}>
      GL2
    </Button>
  </>
) : null}
  {level === "II3" ? (
  <>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('GL')}>
      GL
    </Button>
  </>
) : null}

    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('IA')}>
    IA
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('ST-IOT')}>
    ST-IOT
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('SLE')}>
    SLE
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('IF')}>
    IF
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleSpesButtonClick('DS-CV')}>
    DS-CV
    </Button>
  </Box>
) : null}
  
  <Box mb={4}>
  <Text fontSize="md" fontWeight="600" color={textColor}>
							Number of clusters :
              <br/>
		</Text>
  <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() =>handleNumClustersChange('2')}>
      2
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() =>handleNumClustersChange('3')}>
      3
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() =>handleNumClustersChange('4')}>
      4
    </Button>
    <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() =>handleNumClustersChange('5')}>
      5
    </Button>
  </Box>
  <Box mb={4}>
  
  <Button mr={2} style={{backgroundColor:'#E31A1A'}} onClick={() => handleClick()}>
      Render the graph
  </Button>
  </Box>
  </div>
    </>
  );
}
