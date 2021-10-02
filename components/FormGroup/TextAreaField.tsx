import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import * as React from 'react';

interface Props{
    id: string,
    label: string,
    maxLength?: number,
    value: string,
    onChange: (val: string) => void,
    required?: boolean,
};

const TextAreaField = ({
    label, value, onChange, maxLength=50, id, required = false,
}:Props) => {
    const onValueChange = (e: any) => onChange(e.target.value);

    return (
        <FormControl id={id} isRequired={required}>
            <FormLabel>{label}</FormLabel>
            <Textarea rows={5}
                value={value}
                onChange={onValueChange}
                maxLength={maxLength}
            />
        </FormControl>
    );
};

export default TextAreaField;
