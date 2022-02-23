import { Link as PageLink } from 'react-router-dom'
import styled from 'styled-components'

const LinkEl = styled(PageLink)`
    text-decoration: none;
    font-weight: 600;
    color: var(--color-primary);
`

interface Props {
    link: string
    text: string
}

export default function Link(props: Props) {
    return <LinkEl to={`/${props.link}`}>{props.text}</LinkEl>
}
