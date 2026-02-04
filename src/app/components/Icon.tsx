import React from 'react'

interface Props{
    imagePath: string;
    size: string;
    altName: string
    
}

export default function Icon({imagePath, size, altName}: Props ) {
  return (
    <img
    src = {imagePath}
    width = {size}
    height = {size}
    alt = {altName}
    className='inline'
    />
  )
}
