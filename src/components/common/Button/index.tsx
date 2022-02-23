import styled from 'styled-components'

interface Props {
    clickFunction: () => void
    disabled: boolean
    buttonText: string
}

const Btn = styled.button`
    background: white;
    padding: 10px;
    min-width: 40px;
    border: 2px solid ${(props) => (!props.disabled ? '#96d1f7' : '#d8d8d8')};
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    color: ${(props) => (!props.disabled ? '#6abcf3' : '#d8d8d8')};
`

export default function Button(props: Props) {
    return (
        <Btn onClick={props.clickFunction} disabled={props.disabled}>
            {props.buttonText}
        </Btn>
    )
}
