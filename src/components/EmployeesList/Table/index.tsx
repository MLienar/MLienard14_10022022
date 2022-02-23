import { selectList } from '../../../services/selector'
import { useSelector } from 'react-redux'
import tableColumns from '../../../assets/data/tableColumns'
import {
    useTable,
    useGlobalFilter,
    useAsyncDebounce,
    useSortBy,
    usePagination,
} from 'react-table'
import { useMemo, useState } from 'react'
import styled from 'styled-components'
import GlobalFilter from './GlobalFilter'
import Pagination from './Pagination'
import Dropdown from './Dropdown'
import Link from '../../common/Link'

const TableOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 0;
`

const TableContainer = styled.table`
    border-spacing: 0;
    border: 1px solid #bfbfbf;
    font-size: 0.8rem !important;
    tr {
        position: relative;
        :last-child {
            td {
                border-bottom: 0;
            }
        }
    }

    th,
    td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid #cecece;
        vertical-align: middle;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100px;
        @media screen and (min-width: 1080px) {
            max-width: 14vw;
        }
        :last-child {
            border-right: 0;
        }
        &:hover {
            overflow: visible
            z-index: 100;
            max-width: unset;
            width: fit-content;
            position: absolute;
            background: white;
            border-bottom: 1px solid #cecece;
        }
    }
    th {
        font-weight: 600;
    }
    tr:nth-child(2n) {
        background: #f1f1ff;
        td:hover {
            background: #f1f1ff;
        }
    }
`

const MainContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`

const DropdownContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export default function Table() {
    const employees = useSelector(selectList).employees
    const data = useMemo(() => employees, [employees])
    const columns = useMemo(() => tableColumns, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        //@ts-ignore
        page,
        prepareRow,
        state,
        //@ts-ignore
        preGlobalFilteredRows,
        //@ts-ignore
        setGlobalFilter,
        //@ts-ignore
        canPreviousPage,
        //@ts-ignore
        canNextPage,
        //@ts-ignore
        pageOptions,
        //@ts-ignore
        gotoPage,
        //@ts-ignore
        pageCount,
        //@ts-ignore
        nextPage,
        //@ts-ignore
        previousPage,
        //@ts-ignore
        setPageSize,
        //@ts-ignore
        state: { pageIndex, pageSize },
    } = useTable(
        {
            //@ts-ignore
            columns,
            //@ts-ignore
            data,
            //@ts-ignore
            initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    return (
        <MainContainer>
            <TableOptions>
                <DropdownContainer>
                    <p>Show</p>
                    <Dropdown
                        options={[10, 20, 30, 40, 50]}
                        onChange={(e) => {
                            setPageSize(Number(e.value))
                        }}
                        value={pageSize}
                    />

                    <p>entries</p>
                </DropdownContainer>
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    //@ts-ignore
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />{' '}
            </TableOptions>
            <TableContainer {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        //@ts-ignore
                                        column.getSortByToggleProps()
                                    )}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {
                                            //@ts-ignore
                                            column.isSorted
                                                ? //@ts-ignore
                                                  column.isSortedDesc
                                                    ? '⬇'
                                                    : '⬆'
                                                : ''
                                        }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row: any, i: any) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </TableContainer>
            <TableOptions>
                <Pagination
                    gotoPage={gotoPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageOptions={pageOptions}
                    pageIndex={pageIndex}
                    pageCount={pageCount}
                />
                <Link link="" text="Add Employee" />
            </TableOptions>
        </MainContainer>
    )
}
