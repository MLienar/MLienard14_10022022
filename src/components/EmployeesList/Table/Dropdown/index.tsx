import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import styled from 'styled-components'

interface Props {
    options: any[]
    value: number
    onChange: (arg: any) => void
}

const Drpdwn = styled(Dropdown)`
    width: clamp(30px, 10vw, 60px);
    display: flex;
    justify-content: flex-end;
    .Dropdown-control {
        width: 100%;
    }
    .Dropdown-arrow  {
        right: 1px;
    }
`

export default function TableDropdown(props: Props) {
    return (
        <Drpdwn
            options={props.options}
            onChange={props.onChange}
            value={props.value.toString()}
        />
    )
}
