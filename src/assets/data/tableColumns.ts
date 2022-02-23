const columns = [
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Start Date',
        accessor: 'startDate',
    },
    {
        Header: 'Department',
        accessor: 'department',
    },
    {
        Header: 'Date of Birth',
        accessor: 'birth',
    },
    {
        Header: 'City',
        accessor: 'adress.city',
    },
    {
        Header: 'Street',
        accessor: 'adress.street',
    },
    {
        Header: 'State',
        accessor: 'adress.state',
    },
    {
        Header: 'Zip Code',
        accessor: 'adress.zipCode',
    },
]

export default columns
