import React from 'react'

export default function Navbar({ routesMap }) {
  return (
    <nav>
      {Object.entries(routesMap).map(([ path, name ]) => {
        return <li key={path}>
          <a href={ path }>
            { name }
          </a>
        </li>
      })}
    </nav>
  )
}
