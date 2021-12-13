import React from 'react'
import todos from '../todos.js'
import { MDBDataTable } from 'mdbreact'

const TodoItem = ({ todo }) => {
    const setTodos = () => {
        const data = {
            columns: [
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'asc'
                },
                {
                    label: 'Note',
                    field: 'note',
                    sort: 'asc'
                },
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'asc'
                }
            ],
            rows: []
        }

        todos?.forEach(todo => {
            data.rows.push({
                title: todo.title,
                note: todo.note,
                date: todo.date
            })
        })

        return data;
    }
    return (
        <div style={{ marginTop: '150px', marginLeft: '100px', marginRight: '100px' }}>
            <MDBDataTable
                data={setTodos()}
                className='px-3'
                bordered
                striped
                hover
            />

            {/* <table className="table table-bordered table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Note</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <th scope="row">{todo._id}</th>
                            <td>{todo.title}</td>
                            <td>{todo.note}</td>
                            <td>{todo.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    )
}

export default TodoItem


