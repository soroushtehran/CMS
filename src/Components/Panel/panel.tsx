import React from 'react'
import './panel.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Panel() {
  return (
    <aside className='sidebar' >
      <h1>به داشبورد خود خوش آمدید</h1>
      <ul>
        <li><NavLink
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          to={'/'}> صفحه اصلی </NavLink></li>
        <li><NavLink
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          to={'/Products'}> محصولات </NavLink></li>
        <li><NavLink
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          to={'/Blog'}> مقالات </NavLink></li>
      </ul>
    </aside>
  )
}
