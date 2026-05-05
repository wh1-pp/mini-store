import './App.css'
import { useState, useEffect } from 'react'

function App() {

const titles = ['mini-store', 'MINI-STORE', 'miNi-stOre', 'Mini-Store']
const [index, setIndex] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setIndex(prev => (prev + 1) % titles.length)
  }, 2000)
  document.title = titles[index]
  return () => clearInterval(timer)
}, [index])


  return (
    <div className="page">

      <h1 className="logo">Mini<span>Store</span></h1>

      <div className="cards">

        <div className="card">
          <div className="card-top">
            <img src="https://ministor.ru/assets/study-sprint/cover.jpg" alt="Учебный спринт" />
          </div>
          <div className="card-bottom">
            <p className="title">Учебный спринт <span className="free">Бесплатно</span></p>
            <p className="desc">Показывает учебный интерфейс для категории Обучение и подходит для каталога, поиска, карточек...</p>
            <div className="footer">
              <span>Обучение</span>
              <span>web · ios</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <img src="https://ministor.ru/assets/sales-harbor/cover.jpg" alt="Гавань продаж" />
          </div>
          <div className="card-bottom">
            <p className="title">Гавань продаж <span className="free">Бесплатно</span></p>
            <p className="desc">Показывает учебный интерфейс для категории Финансы и подходит для каталога, поиска, карточек...</p>
            <div className="footer">
              <span>Финансы</span>
              <span>web · desktop</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <img src="https://ministor.ru/assets/insight-trail/cover.jpg" alt="Тропа инсайтов" />
          </div>
          <div className="card-bottom">
            <p className="title">Тропа инсайтов <span className="free">Бесплатно</span></p>
            <p className="desc">Показывает учебный интерфейс для категории Аналитика и подходит для каталога, поиска, карточек...</p>
            <div className="footer">
              <span>Аналитика</span>
              <span>web</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <img src="https://ministor.ru/assets/budget-lens/cover.jpg" alt="Бюджетная линза" />
          </div>
          <div className="card-bottom">
            <p className="title">Бюджетная линза <span className="free">Бесплатно</span></p>
            <p className="desc">Показывает учебный интерфейс для категории Финансы и подходит для каталога, поиска, карточек...</p>
            <div className="footer">
              <span>Финансы</span>
              <span>web · android</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App