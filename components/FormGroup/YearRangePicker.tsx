import React from 'react';
import { FormControl, FormLabel, InputGroup } from '@chakra-ui/react'
import DatePicker from "react-datepicker";

interface Props{
    value: Date,
    value2: Date,
    onChange: (date: any) => void,
    onChange2: (date: any) => void,
    isRequired?: boolean,
    title: string,
    id: string,
};

const YearRangePicker = ({
    value, value2, onChange, onChange2, title, id, isRequired = false,
}:Props) => (
    <FormControl id={`${id}-control`} isRequired={isRequired}>
        <FormLabel>{title}</FormLabel>
        <InputGroup>
            <DatePicker
                id={`${id}-1`}
                minDate={new Date()}
                selected={value}
                onChange={onChange}
                showYearPicker
                dateFormat="yyyy"
                yearItemNumber={9}
            />
            <DatePicker
                id={`${id}-2`}
                minDate={new Date()}
                selected={value2}
                onChange={onChange2}
                showYearPicker
                dateFormat="yyyy"
                yearItemNumber={9}
            />
        </InputGroup>
    </FormControl>
);

export default YearRangePicker;
