import React from 'react'
import todos from '../todos.js'

const TodoItem = ({ todo }) => {
    return (
        <>
            <table className="table table-bordered table-hover table-dark">
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
            </table>
        </>
    )
}

export default TodoItem


    // <div div className = "container py-5 h-100" >
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col col-lg-9 col-xl-7">
    //             <div className="card rounded-3">
    //                 <div className="card-body p-4">

    //                     <h4 className="text-center my-3 pb-3">To Do App</h4>

    //                     <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
    //                         <div className="col-12">
    //                             <div className="form-outline">
    //                                 <input type="text" id="form1" className="form-control" Placeholder="Enter a task here" />
    //                             </div>
    //                         </div>

    //                         <div className="col-12">
    //                             <button type="submit" className="btn btn-primary">Save</button>
    //                         </div>

    //                         <div className="col-12">
    //                             <button type="submit" className="btn btn-warning">Get tasks</button>
    //                         </div>
    //                     </form>

    //                     <table className="table mb-4">
    //                         <thead>
    //                             <tr>
    //                                 <th scope="col">No.</th>
    //                                 <th scope="col">Todo item</th>
    //                                 <th scope="col">Notes</th>
    //                                 <th scope="col">Date</th>
    //                                 <th scope="col">Actions</th>
    //                             </tr>
    //                             <th scope="col">Notes</th>
    //                         </thead>
    //                         <tbody>
    //                             <tr>
    //                                 <th scope="row">{todo._id}</th>
    //                                 <td>{todo.title}</td>
    //                                 <td>{todo.note}</td>
    //                                 <td>{todo.date}</td>
    //                                 <td>
    //                                     <button type="submit" className="btn btn-danger">Delete</button>
    //                                     <button type="submit" className="btn btn-success ms-1">Finished</button>
    //                                 </td>
    //                             </tr>
    //                         </tbody>
    //                     </table>

    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //         </div >



