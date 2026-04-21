"use client"
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [libros, setLibros] = useState([])

  useEffect(() => {
    async function obtenerLibros() {
      const { data, error } = await supabase.from('books').select('*')
      if (error) console.log('Error:', error)
      else setLibros(data)
    }
    obtenerLibros()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>J bookstore - Lista de libros</h1>
      <ul>
        {libros.map(libro => (
          <li key={libro.id}>
            {libro.title} - {libro.author} ({libro.status})
          </li>
        ))}
      </ul>
    </div>
  )
}