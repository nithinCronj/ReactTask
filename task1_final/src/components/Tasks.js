import Task from "./Task";
const Tasks = ({tasks, onDelete, onEdit,searchText}) => {
    return (
        <>
        <p>{searchText}</p>
        {
        tasks.map((task)=>{
            // if(searchText==null)
            // {
            //     return  return  <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>
            // }
            if (task.name== searchText ) {
                console.log("match");
              return  <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>
                        }else if (searchText == "") {
                            
        
             return  <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>

               
            }
        
        })
    }
        </>
    )
}

export default Tasks
{/*  */}