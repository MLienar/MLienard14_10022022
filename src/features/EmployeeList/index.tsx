import { createSlice } from '@reduxjs/toolkit'
import { Employee } from '../../services/types'
import { AppDispatch } from '../../store'
import employees from '../../assets/data/employees'

interface State {
    employees: Employee[]
    status: string
}

const initialState: Readonly<State> = {
    employees: [],
    status: 'void',
}

const { actions, reducer } = createSlice({
    name: 'employeeList',
    initialState,
    reducers: {
        addEmployeeToList: (draft, actions) => {
            draft.employees.push(actions.payload)
        },
        employeesLoading: (draft, action) => {
            if (draft.status === 'void') {
                draft.status = 'pending'
                return
            }
            if (draft.status === 'fetched') {
                draft.status = 'updating'
            }
        },
        getEmployeeList(draft, action) {
            const employeeList = action.payload
            for (const employee of employeeList) {
                const addEmployee = draft.employees.find(
                    (entry) => entry.firstName === employee.firstName
                )
                if (!addEmployee) {
                    draft.employees.push(employee)
                    draft.status = 'fetched'
                }
            }
        },
    },
})

export function addEmployeesToStore() {
    return async (dispatch: AppDispatch) => {
        dispatch(actions.employeesLoading('yo'))
        try {
            dispatch(actions.getEmployeeList(employees))
        } catch (err) {
            console.log(err)
        }
    }
}

export default reducer
export const { addEmployeeToList } = actions
