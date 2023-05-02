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
  const [numberOfClusters, setNumberOfClusters] = useState("3");
  const [group, setGroup] = useState("");
  const [level, setLevel] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [myProp, setMyProp] = useState();

  const handleClick = (propValue) => {
    setMyProp(propValue);
    setButtonClicked(true);
  };

  const handleIIButtonClick = (value) => {
    setLevel(value)
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
  if (numberOfClusters === "2") {
    data = data2
  } else if (numberOfClusters === "3") {
    data = data3
  } else if (numberOfClusters === "4") {
    data = data4
  } else {
    data = data5
  }

  function filterDataByCriteria(data, group, level, specialization) {
    return data.filter(d => (d.Group === group && d.Level === level) || (d.Major === specialization && d.Level === level));
  }
  
  const filteredData = filterDataByCriteria(data, group, level, specialization);

  const groupedData = d3.group(filteredData, d => d['Kmeans labels']);
  console.log(groupedData)
  return (
    <>
    <div className="graph_container">
    {/* {buttonClicked && <MyVisComponent myProp={myProp} />}
    {!buttonClicked && <MyVisComponent />} */}
    {buttonClicked && <MyVisComponent myProp={myProp} />}
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
  <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() =>handleNumClustersChange(2)}>
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
  
  <Button mr={2} style={{backgroundColor:'#11047A'}} onClick={() => handleClick(groupedData)}>
      Render the graph
  </Button>
  </Box>
  </div>
    </>
  );
}
