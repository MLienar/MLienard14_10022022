import * as Yup from 'yup'

export const ValidationSchema = Yup.object({
    firstName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    department: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    birth: Yup.date().min('01/01/1990').max('01/01/2022').required('Required'),
    startDate: Yup.date()
        .min('01/01/1990')
        .max('01/01/2030')
        .required('Required'),
    adress: Yup.object().shape({
        city: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(30, 'Must be 20 characters or less')
            .required('Required'),
        street: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(40, 'Must be 40 characters or less')
            .required('Required'),
        zipCode: Yup.string()
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(5, 'Must be exactly 5 digits')
            .max(5, 'Must be exactly 5 digits')
            .required('Required'),
        state: Yup.string().required('Required'),
    }),
})

export default ValidationSchema
