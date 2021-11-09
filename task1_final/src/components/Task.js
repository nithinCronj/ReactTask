const Task = ({task, onDelete, onEdit}) => {

    return (
        <div>
            <div className="task">
                <div>
                    <p className="taskName">
                        <span className="textBold"> Name:</span> {task.name}
                    </p>
                    <p className="taskName">
                        <span className="textBold"> Age:</span> {task.age}
                    </p>
                </div>
                <div>
                <p> <button onClick={()=> onDelete(task.id)}>Delete</button> </p>
                <p> <button onClick={()=> onEdit(task.id)}>Edit</button> </p>
            </div>
        </div>
        </div>

    )
}

export default Task
