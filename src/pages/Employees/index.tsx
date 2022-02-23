import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployeesToStore } from '../../features/EmployeeList'
import PageTitle from '../../components/common/PageTitle'
import Table from '../../components/EmployeesList/Table'
import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: clamp(400px, 90vw, 900px);
`

export default function Employees() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addEmployeesToStore())
    }, [dispatch])

    return (
        <Main>
            <PageTitle text="Current Employees" />
            <Table />
        </Main>
    )
}
