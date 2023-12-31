import React from 'react'
import Navbar from './Navbar'
import { useAuth } from '../contexts/auth'

export default function Home() {

  const { auth } = useAuth();

  console.log(auth)

  return (
    <>
      <Navbar />
      <video src="/Library.mp4" autoPlay muted loop id='libvid'></video>
      <div className='maindiv'>
        <h1 id='head01'>Welcome to the Hogwarts Library</h1>
        <h2 id='head02'>Enter</h2>
      </div>
      <div id='fdiv'>
        <div id='fdiv2'>
          <h1 id='fdivhead' >Your own magical Library</h1>
          <p id='fpara'>Explore the wizarding world from your desk. Roam into the 
          library of Hogwarts and dive deep into the wizaring world. Creatures, Wands,
          famous Witches and Wizards, Spells, Books and much more. Learn, practice and master
          your spells and try them out! Discuss with your friends on an online community, your
          wizarding journey is just a click away!</p>
        </div>
        <img id='spellbook' src="/Images/spellbook.png" alt="" />
      </div>
      <div id='ddiv'>Hello</div>
    </>
  )
}
