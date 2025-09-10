import React from 'react';

interface InputTextProps {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ value, placeholder, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="input-text"
        />
    );
};

export default InputText;