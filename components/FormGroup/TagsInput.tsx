import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import Select from 'react-select';

interface Props{
    options?: Array<{key: string, label: string, value: string|number}>,
    value: Array<{label: string, value: string|number}>,
    required?: boolean,
    title: string,
    id: string,
    onChange: (opt:Array<{label: string, value: string|number}>) => void,
};

const TagsInput = ({
    onChange, value, required, options = [], title, id,
}:Props) => (
    <FormControl id={id} isRequired={required}>
        <FormLabel>{title}</FormLabel>
        <Select
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            value={value}
            onChange={onChange}
        />
  </FormControl>
);

export default TagsInput;
