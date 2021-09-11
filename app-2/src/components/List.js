import React from 'react';

const List = ({ list }) => {
    return (
        list.map((item, i) => {
            return <li key={i}> {item.name} </li>
        })
    )
}

export default List;