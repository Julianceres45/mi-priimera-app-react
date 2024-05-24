import React, {useEffect} from 'react'
import { cssBtnDanger, cssCard, cssTitle } from '../../../utils/cssVars'

export default function Taskcard({tarea}) {

    useEffect(() => {

        console.log(tarea);
        
 }, []);

  return (
    <div className = {cssCard}>
        <p className={cssTitle}>tarea.title</p>
        <p>tarea.description</p>
        <button className={cssBtnDanger}>eliminar</button>
      
    </div>
  )
}
