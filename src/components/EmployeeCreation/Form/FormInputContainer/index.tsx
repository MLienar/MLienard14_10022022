import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import { ErrorMessage } from 'formik'

interface Props {
    label: string
    children: React.ReactNode
    name: string
}

const Error = styled(ErrorMessage)`
    color: #920000;
    font-size: 0.8rem;
`

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column nowrap;
    margin: 0 0 clamp(10px, 3vh, 20px) 0;
    width: 100%;
`

const Label = styled.label`
    margin: 0 0 5px 0;
`

export default function FormInputContainer(props: Props) {
    return (
        <Container>
            <Label htmlFor={props.name} className="text_small">
                {props.label}
            </Label>
            {props.children}
            <Error name={props.name} component="p" />
        </Container>
    )
}
