import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import * as React from 'react';

interface Props{
    id: string,
    label: string,
    value: boolean,
    onChange: (val: boolean) => void,
    required?: boolean,
};

const SwitchField = ({
    label, value, onChange, id, required = false,
}:Props) => {
    const onValueChange = (e: any) => onChange(e.target.checked);

    return (
        <FormControl id={`${id}-switch`} isRequired={required} display="flex">
            <FormLabel htmlFor={id} flex="1">{label}</FormLabel>
            <Switch
                id={id}
                name={id}
                isChecked={value}
                onChange={onValueChange}
            />
        </FormControl>
    );
};

export default SwitchField;
