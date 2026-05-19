import React from 'react'

export default function BlogLayout(
  {
    children
  }: {
    children: React.ReactNode
  }
) {
  return (
    <html lang='en'>
    <body className='min-h-full flex flex-col'>
      <h1>Welcome to blog layout</h1>

      {children}
    </body >
    </html>
  )
}