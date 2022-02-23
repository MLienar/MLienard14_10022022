import styled from 'styled-components'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useField } from 'formik'

interface Props {
    name: string
}

const DatePickContainer = styled(DatePicker)`
    padding: 5px 10px;
    width: 90%;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border-radius: 5px;
    border: 2px solid #7f91a0;
`

export default function InputDate(props: Props) {
    const [field, meta, helpers] = useField(props.name)
    const { value } = meta
    const { setValue } = helpers
    const [displayDate, setDisplayDate] = useState(new Date())

    const handleDateChange = (date: Date) => {
        if (date) {
            const dateToString = date
                .toISOString()
                .split('T')[0]
                .replaceAll('-', '/')
            setValue(dateToString)
            setDisplayDate(date)
        }
    }

    return (
        <DatePickContainer
            selected={displayDate}
            onChange={handleDateChange}
            onSelect={handleDateChange}
        />
    )
}
