import styled from 'styled-components'

interface Props {
    title: string
    children: React.ReactNode
    color: string
}

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column nowrap;
    padding: clamp(20px, 5vh, 40px) clamp(20px, 5vh, 40px)
        clamp(10px, 2.5vh, 20px);
    border-radius: 10px;
    border: 2px solid #7f91a0;
    position: relative;
    margin: 20px 0;
    width: clamp(300px, 50%, 330px);
`

const Title = styled.p.attrs((props: Props) => ({
    color: props.color,
}))`
    position: absolute;
    top: 0;
    left: clamp(20px, 5vh, 40px);
    transform: translateY(-50%) translateX(-10px);
    background: white;
    padding: 0 10px;
    text-transform: capitalize;
    font-weight: 600;
    color: ${(props) => props.color};
`

export default function SubContainer(props: Props) {
    return (
        <Container>
            <Title color={props.color}>{props.title}</Title>
            {props.children}
        </Container>
    )
}
