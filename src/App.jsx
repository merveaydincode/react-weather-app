import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/header'
import Sidebar2 from './components/Sidebar2'
import Card from './components/Card'


function App() {
  return (
    <div className='mx-auto mt-0'>
      <Header />
      <img src="https://images.unsplash.com/photo-1533657899183-fefb874a1a8f?" alt="Sunset" className="background-image" />
      <h1>Şehir seçerek hava durumunu öğrenebilirsiniz.</h1>
      <h3>Şehrini seç ve hava durumunu öğren.</h3>
      <Sidebar />
      <Sidebar2 />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       <Card />
     
    </div>
  )
}

export default App
