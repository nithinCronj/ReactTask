import { useState } from "react";

const AddTask = ({onSave}) => {



    const [name, setName]=useState('');
    const [age, setAge]=useState('');

    const onSubmit=(e)=>{
        e.preventDefault();
        if(name && age){
            onSave({name, age});
        }
        setAge('');
        setName('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="text" placeholder="age" value={age} onChange={(e)=> setAge(e.target.value)}/>            
            </div>
            <input type="submit" className="btn" value="Save"/>
        </form>
        
    )
}

export default AddTask
