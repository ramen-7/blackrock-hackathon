// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const back=pieChartOptions.fill.colors
  
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Your Pie Chart
        </Text>
        {/* <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select> */}
      </Flex>

      <PieChart
        h='100%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='0px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg={back[0]} borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              {pieChartOptions.labels[0]}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
          {pieChartData[0]}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "6px", xl: "6px", "2xl": "6px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg={back[1]} borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              {pieChartOptions.labels[1]}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {pieChartData[1]}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "6px", xl: "6px", "2xl": "6px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg={back[2]} borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              {pieChartOptions.labels[2]}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {pieChartData[2]}%
          </Text>
        </Flex>
      </Card>
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='5px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg={back[3]} borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              {pieChartOptions.labels[3]}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
          {pieChartData[3]}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "6px", xl: "6px", "2xl": "6px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg={back[4]} borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              {pieChartOptions.labels[4]}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {pieChartData[4]}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "6px", xl: "6px", "2xl": "6px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg={back[5]} borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              {pieChartOptions.labels[5]}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {pieChartData[5]}%
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
