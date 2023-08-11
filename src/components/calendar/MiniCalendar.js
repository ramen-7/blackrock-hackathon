import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "assets/css/MiniCalendar.css";
import { Text, Icon } from "@chakra-ui/react";
import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';
import './CalendarHeatmap.css';
// Chakra imports
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// Custom components
import Card from "components/card/Card.js";

export default function MiniCalendar(props) {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());
  return (
    <Card
      align='center'
      direction='column'
      w='100%'
      maxW='max-content'
      p='20px 15px'
      h='max-content'
      {...rest}>
      {/* <Calendar */}
      {/* <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color='brand.500'></Text>}
        prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
        nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}
      />
      /> */}

<CalendarHeatmap
  startDate={new Date('2016-01-01')}
  endDate={new Date('2016-03-01')}
  values={[
    { date: '2016-01-02', count: 12 },
    { date: '2016-01-22', count: 122 },
    { date: '2016-01-30', count: 38 },
    // ...and so on
  ]}

  // Apply inline style to customize color based on count
  classForValue={(value) => {
    if (!value) {
      return 'color-empty'; // CSS class for empty cells
    }
    if (value.count <= 50) {
      return 'color-low'; // CSS class for low count cells
    }
    if (value.count <= 100) {
      return 'color-medium'; // CSS class for medium count cells
    }
    return 'color-high'; // CSS class for high count cells
  }}
/>
    </Card>
  );
}