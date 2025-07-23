'use client'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    window.location.href = '/index.html'
  }, [])

  return <p>Redirecting...</p>
}
