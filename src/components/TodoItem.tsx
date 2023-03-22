
import classes from './TodoItem.module.css';
import * as React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const TodoItem: React.FC<{ text: string,onRemoveTodo:()=>void }> = (props) => {
  return <li className={classes.item}>{props.text}  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <FaRegTrashAlt style={{marginLeft:'200px'}} onClick={props.onRemoveTodo}/> </li>
  ;
};
export default TodoItem;
