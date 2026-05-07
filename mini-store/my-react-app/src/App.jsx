import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const titles = ['mini-store', 'MINI-STORE', 'miNi-stOre', 'Mini-Store']
  const [index, setIndex] = useState(0)
  const [query, setQuery] = useState('')

  const cards = [
    {
      img: 'https://ministor.ru/assets/study-sprint/cover.jpg',
      alt: 'Учебный спринт',
      title: 'Учебный спринт',
      desc: 'Показывает учебный интерфейс для категории Обучение и подходит для каталога, поиска, карточек...',
      category: 'Обучение',
      platforms: 'web · ios',
    },
    {
      img: 'https://ministor.ru/assets/sales-harbor/cover.jpg',
      alt: 'Гавань продаж',
      title: 'Гавань продаж',
      desc: 'Показывает учебный интерфейс для категории Финансы и подходит для каталога, поиска, карточек...',
      category: 'Финансы',
      platforms: 'web · desktop',
    },
    {
      img: 'https://ministor.ru/assets/insight-trail/cover.jpg',
      alt: 'Тропа инсайтов',
      title: 'Тропа инсайтов',
      desc: 'Показывает учебный интерфейс для категории Аналитика и подходит для каталога, поиска, карточек...',
      category: 'Аналитика',
      platforms: 'web',
    },
    {
      img: 'https://ministor.ru/assets/budget-lens/cover.jpg',
      alt: 'Бюджетная линза',
      title: 'Бюджетная линза',
      desc: 'Показывает учебный интерфейс для категории Финансы и подходит для каталога, поиска, карточек...',
      category: 'Финансы',
      platforms: 'web · android',
    },
  ]

  const filtered = cards.filter(card =>
    card.title.toLowerCase().includes(query.toLowerCase()) ||
    card.category.toLowerCase().includes(query.toLowerCase())
  )

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

      <div className="search-wrapper">
        <input
          className="search"
          type="text"
          placeholder="Поиск"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')}>✕</button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="no-results">Ничего не найдено</p>
      ) : (
        <div className="cards">
          {filtered.map(card => (
            <div className="card" key={card.title}>
              <div className="card-top">
                <img src={card.img} alt={card.alt} />
              </div>
              <div className="card-bottom">
                <p className="title">{card.title} <span className="free">Бесплатно</span></p>
                <p className="desc">{card.desc}</p>
                <div className="footer">
                  <span>{card.category}</span>
                  <span>{card.platforms}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App