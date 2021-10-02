import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'
import * as React from 'react'

interface Props extends SelectProps{
    options?: Array<{key: string, label: string, value: string|number}>
};

const SelectInput = ({
    onChange, value, isRequired, options = [], title, id,
}:Props) => (
  <FormControl id={id} isRequired={isRequired}>
    <FormLabel>{title}</FormLabel>
    <Select value={value} onChange={onChange}>
        {
          value ? null : (
            <option value="" style={{display: 'none'}} selected></option>
          )
      }
      {
          options.map((item) => (
             <option key={item.key} value={item.value}>{item.label}</option>
          ))
      }
    </Select>
  </FormControl>
);

export default SelectInput;
