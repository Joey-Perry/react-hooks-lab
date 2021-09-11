import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const [userInput, setUserInput ] = useState('');

    const handleInput = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <>
        <input value={userInput} onChange={handleInput} />
        <button onClick={() => addTodo(userInput)}>ADD</button>
        </>
    )
}

export default AddTodo;