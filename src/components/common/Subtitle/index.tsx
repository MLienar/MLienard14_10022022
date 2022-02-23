import styled from 'styled-components'

const PageSubtitle = styled.h2`
    margin: clamp(10px, 2.5vh, 20px) 0;
    font-size: 1.2rem;
`

interface Props {
    text: string
}

export default function Subtitle(props: Props) {
    return <PageSubtitle>{props.text}</PageSubtitle>
}
