import styled from 'styled-components'

const Title = styled.h1`
    margin: clamp(10px, 2.5vh, 20px) 0;
`

interface Props {
    text: string
}

export default function PageTitle(props: Props) {
    return <Title>{props.text}</Title>
}
