import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import * as React from 'react';

interface Props{
    id: string,
    label: string,
    type?: 'text' | 'number' | 'hidden',
    maxLength?: number,
    value: string|number,
    onChange: (val: string) => void,
    required?: boolean,
    height?: string,
};

const InputField = ({
    label, value, type = 'text', onChange, maxLength=50, id, required = false, height,
}:Props) => {
    const onValueChange = (e: any) => onChange(e.target.value);

    return (
        <FormControl id={id} isRequired={required}>
            <FormLabel>{label}</FormLabel>
            <Input
                type={type}
                value={value}
                onChange={onValueChange}
                maxLength={maxLength}
                autoComplete="off"
                height={height}
            />
        </FormControl>
    );
};

export default InputField;
