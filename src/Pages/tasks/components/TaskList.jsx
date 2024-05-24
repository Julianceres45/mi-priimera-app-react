import React from 'react'
import { cssArticle, cssGrid, cssSection } from '../../../utils/cssVars'
import Taskcard from './Taskcard'

export default function TaskList() {

     const tareas = [
        {
            "id": 1,
            "title": "Primero Objeto",
            "description": "Descripción del primer objeto.",
            "state": "activo"
        },
        {
            "id": 2,
            "title": "Segundo Objeto",
            "description": "Descripción del segundo objeto.",
            "state": "inactivo"
        },
        {
            "id": 3,
            "title": "Tercer Objeto",
            "description": "Descripción del tercer objeto.",
            "state": "pendiente"
        }]
    
    return (
      <section className={cssSection}>
          <article className={`${cssArticle} ${cssGrid}`}>

            {

              tareas.map((tarea, index) => 
                <Taskcard  key={index} tarea={tarea} />
            
            )  
            }
              
          </article>
      </section>
    )
  }
