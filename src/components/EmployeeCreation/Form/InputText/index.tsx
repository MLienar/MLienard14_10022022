import styled from 'styled-components'
import { Field } from 'formik'
import React from 'react'

interface Props {
    handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string | number
}

const Input = styled(Field)`
    padding: 5px 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    width: 90%;
    border-radius: 5px;
    border: 2px solid #7f91a0;
    &:focus {
        outline: none;
        border: 2px solid var(--color-primary);
        box-shadow: 0px 0px 10px #0a43808b;
    }
`

export default function InputText(props: Props) {
    return props.onChange ? (
        <Input
            as="input"
            type="text"
            value={props.value}
            onChange={props.onChange}
        />
    ) : (
        <Input type="text" name={props.name} onBlur={props.handleBlur} />
    )
}
