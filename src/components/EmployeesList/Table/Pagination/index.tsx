import styled from 'styled-components'
import Button from '../../../common/Button'

interface Props {
    gotoPage: (pageNumber: number) => void
    previousPage: () => void
    nextPage: () => void
    canPreviousPage: boolean
    canNextPage: boolean
    pageCount: number
    pageOptions: any
    pageIndex: number
}

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`

const PageIndicator = styled.p`
    margin-left: 10px;
`

const Strong = styled.strong`
    font-weight: 600;
    margin-left: 5px;
`

export default function Pagination(props: Props) {
    return (
        <Container>
            <Button
                clickFunction={() => props.gotoPage(0)}
                disabled={!props.canPreviousPage}
                buttonText="<<"
            />
            <Button
                clickFunction={props.previousPage}
                disabled={!props.canPreviousPage}
                buttonText="<"
            />
            <Button
                clickFunction={props.nextPage}
                disabled={!props.canNextPage}
                buttonText=">"
            />
            <Button
                clickFunction={() => props.gotoPage(props.pageCount - 1)}
                disabled={!props.canNextPage}
                buttonText=">>"
            />
            <PageIndicator>
                Page
                <Strong>
                    {props.pageIndex + 1} of {props.pageOptions.length}
                </Strong>{' '}
            </PageIndicator>
        </Container>
    )
}
