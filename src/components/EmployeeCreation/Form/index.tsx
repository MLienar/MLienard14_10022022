import styled from 'styled-components'
import FormInputContainer from './FormInputContainer/index'
import SubContainer from './SubContainer'
import { useDispatch } from 'react-redux'
import { Employee } from '../../../services/types'
import ErrorChecker from './ErrorChecker'
import InputDate from './InputDate'
import InputText from './InputText'
import InputDropdown from './InputDropdown'
import { Formik, Form as FormikForm } from 'formik'
import departments from '../../../assets/data/departments'
import states from '../../../assets/data/states'
import { addEmployeeToList } from '../../../features/EmployeeList'
import Modal from 'simple-react-modal-oc'
import { useState } from 'react'

const FormContainer = styled(FormikForm)`
    width: clamp(350px, 80vw, 680px);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
    align-items: flex-start;
    @media screen and (max-width: 850px) {
        flex-flow: column nowrap;
        align-items: center;
    }
`

const Submit = styled.input`
    background: var(--color-primary);
    padding: 10px 30px;
    font-family: 'Poppins', sans-serif;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
`

export default function Form() {
    const dispatch = useDispatch()
    const [modal, showModal] = useState(false)
    const defaultEmployee: Employee = {
        firstName: '',
        lastName: '',
        department: '',
        birth: '',
        startDate: '',
        adress: {
            city: '',
            street: '',
            zipCode: 0,
            state: '',
        },
    }

    function ModalMessage() {
        return <p>Yo, this is a test message</p>
    }

    return (
        <Formik
            initialValues={defaultEmployee}
            onSubmit={async (values, actions) => {
                actions.setSubmitting(true)
                await dispatch(addEmployeeToList(values))
                showModal(true)
                actions.resetForm()
                actions.setSubmitting(false)
            }}
            validationSchema={ErrorChecker}
        >
            <FormContainer>
                {modal ? (
                    <Modal color="#980000">
                        <p>
                            The employee has been added to the database
                            successfully
                        </p>
                    </Modal>
                ) : null}

                <SubContainer title="employee" color="#31bee2">
                    <FormInputContainer name="firstName" label="First Name">
                        <InputText name="firstName" />
                    </FormInputContainer>
                    <FormInputContainer name="lastName" label="Last Name">
                        <InputText name="lastName" />
                    </FormInputContainer>
                    <FormInputContainer name="birth" label="Birth Date">
                        <InputDate name="birth" />
                    </FormInputContainer>
                    <FormInputContainer name="startDate" label="Start Date">
                        <InputDate name="startDate" />
                    </FormInputContainer>
                    <FormInputContainer name="department" label="Department">
                        <InputDropdown
                            name="department"
                            options={departments}
                        />
                    </FormInputContainer>
                </SubContainer>
                <SubContainer title="Adress" color="#a505a5">
                    <FormInputContainer name="adress.street" label="Street">
                        <InputText name="adress.street" />
                    </FormInputContainer>
                    <FormInputContainer name="adress.city" label="City">
                        <InputText name="adress.city" />
                    </FormInputContainer>
                    <FormInputContainer name="adress.state" label="State">
                        <InputDropdown name="adress.state" options={states} />
                    </FormInputContainer>
                    <FormInputContainer name="adress.zipCode" label="Zip Code">
                        <InputText name="adress.zipCode" />
                    </FormInputContainer>
                </SubContainer>

                <Submit type="submit" value="Create" />
            </FormContainer>
        </Formik>
    )
}
