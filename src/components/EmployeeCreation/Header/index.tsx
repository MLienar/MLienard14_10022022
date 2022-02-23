import styled from 'styled-components'
import PageTitle from '../../common/PageTitle'
import Link from '../../common/Link'
import Subtitle from '../../common/Subtitle'

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    text-align: center;
`

export default function Header() {
    return (
        <Container>
            <PageTitle text={'HRNet'} />
            <Link text={'View current employees'} link={'employees'} />
            <Subtitle text={'Create employee'} />
        </Container>
    )
}
