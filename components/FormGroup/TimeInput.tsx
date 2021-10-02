import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react'
import DatePicker from "react-datepicker";

interface Props{
    value: Date,
    onChange: (date: any) => void,
    isRequired?: boolean,
    title: string,
    id: string,
};

const TimeSelect = ({ value, onChange, title, id, isRequired = false }:Props) => (
    <FormControl id={`${id}-control`} isRequired={isRequired}>
        <FormLabel>{title}</FormLabel>
        <DatePicker
            id={id}
            selected={value}
            onChange={onChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
        />
    </FormControl>
);

export default TimeSelect;
