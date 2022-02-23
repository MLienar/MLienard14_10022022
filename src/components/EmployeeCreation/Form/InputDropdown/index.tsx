import React from 'react'
import Dropdown, { Option } from 'react-dropdown'
import 'react-dropdown/style.css'
import { useField } from 'formik'

interface Props {
    options: any[]
    name: string
}

export default function InputDropdown(props: Props) {
    const [field, meta, helpers] = useField(props.name)
    const { value } = meta
    const { setValue } = helpers

    const handleChange = (arg: Option) => {
        setValue(arg.value)
    }

    return (
        <Dropdown options={props.options} onChange={handleChange} value="--" />
    )
}
