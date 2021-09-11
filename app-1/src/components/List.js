// List.js will be responsible for rendering a mapped list of todos which will be passed as props from App.js. 

import React, { useState } from 'react';
import Todo from './Todo';

const List = ({taskList}) => {
    return (
        taskList.map((task, i) => {
            return <Todo key={i} task={task} />
        })
    )
}

export default List;