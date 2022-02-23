import Header from '../../components/EmployeeCreation/Header'
import Form from '../../components/EmployeeCreation/Form'
import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`

export default function Home() {
    return (
        <Main>
            <Header />
            <Form />
        </Main>
    )
}
