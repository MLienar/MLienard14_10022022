import styled from 'styled-components'
import React, { useState } from 'react'
const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0000009a;
    top: 0;
    z-index: 1000;
    left: 0;
`

const ModalBox = styled.div`
    background: white;
    padding: clamp(20px, 5vh, 50px);
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 40%);
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const ModalCloser = styled.div`
    position: absolute;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 32px;
    height: 32px;
    transform: translateX(50%) translateY(-50%);
    border: 4px solid blue;
    background: white;
    border-radius: 50px;
    cursor: pointer;
    &:before,
    &:after {
        position: absolute;
        left: 11px;
        top: 5px;
        content: ' ';
        height: 15px;
        width: 3px;
        background-color: blue;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

interface Props {
    children: React.ReactNode
    color?: string
}

export default function Modal(props: Props) {
    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        setVisible(!visible)
    }

    const noPropag = (e: any) => {
        e.stopPropagation()
    }

    if (visible) {
        return (
            <Container onClick={toggleVisible}>
                <ModalBox onClick={noPropag}>
                    <ModalCloser onClick={toggleVisible}></ModalCloser>
                    {props.children}
                </ModalBox>
            </Container>
        )
    } else {
        return null
    }
}
