import React from 'react'
import TaskList from './components/TaskList'
import { cssArticle, cssBtnSucess, cssSection, cssTitle } from '../../utils/cssVars'

export default function Task() {
  return (
    <main className='text-white'>
    <section className={cssSection}>
      <article className={`${cssArticle} flex items-center justify-between`}>
          <p className={cssTitle}>Lista tareas</p>
          <button className={cssBtnSucess}>Agregar tarea</button>
      </article>
    </section>
    <TaskList />
  </main>
  )
}
