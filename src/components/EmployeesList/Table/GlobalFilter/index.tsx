import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import styled from 'styled-components'

interface GlobalFilterProps {
    preGlobalFilteredRows: any
    globalFilter: any
    setGlobalFilter: any
}

const Input = styled.input`
    padding: 5px 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    width: clamp(100px, 20%, 200px);
    border-radius: 5px;
    border: 2px solid #7f91a0;
    &:focus {
        outline: none;
        border: 2px solid var(--color-primary);
        box-shadow: 0px 0px 10px #0a43808b;
    }
`

export default function GlobalFilter(props: GlobalFilterProps) {
    const count = props.preGlobalFilteredRows.length
    const [value, setValue] = useState('')
    const onChange = useAsyncDebounce((value) => {
        props.setGlobalFilter(value || undefined)
    }, 200)

    return (
        <Input
            value={value || ''}
            onChange={(e) => {
                setValue(e.target.value)
                onChange(e.target.value)
            }}
            placeholder="Search"
        />
    )
}
