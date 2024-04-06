import { Box, Center, Icon } from '@chakra-ui/react';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '../icons/CalendarIcon';

const DateCustomInput = React.forwardRef(
  ({ value, onClick, clearDate }, ref) => (
    <Center ref={ref} onClick={onClick} cursor="pointer">
      {value ? (
        <>
          {value}
          <Box
            pos="absolute"
            right={3}
            fontSize="md"
            color="red.300"
            onClick={(e) => {
              e.stopPropagation();
              clearDate();
            }}
          >
            &times;
          </Box>
        </>
      ) : (
        <Icon as={CalendarIcon} fontSize="xl" />
      )}
    </Center>
  )
);

type DateCellProps = {
  getValue: () => Date | null;
  row: any;
  column: any;
  table: any;
};

const DateCell = ({ getValue, row, column, table }: DateCellProps) => {
  const date = getValue();
  const { updateData } = table.options.meta;
  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="MMM d"
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      customInput={
        <DateCustomInput
          clearDate={() => updateData(row.index, column.id, null)}
        />
      }
    />
  );
};
export default DateCell;
