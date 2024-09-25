import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import FullScreenMessage from './components/shared/FullScreenMessage'
import Heading from '@/components/shared/sections/Heading'
import Video from '@/components/shared/sections/Video'
import { Wedding } from '@/models/wedding'
import ImageGally from './components/shared/sections/ImageGally'
import Intro from './components/shared/sections/Intro'
import Invitation from './components/shared/sections/Invitation'
import Calendar from '@/components/shared/sections/Calendar'
import Map from '@/components/shared/sections/Map'
import Contact from './components/shared/sections/Contact'
import Share from './components/shared/sections/Share'
import Modal from './components/shared/Modal'
import AttendCountModal from './components/AttendCountModal'
import getFetch from './api/wedding'
import getWeddingFetch from './api/wedding'
import { useWedding } from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {

  const [count, setCount] = useState(0)

  const {wedding, err} = useWedding() //custom hook

  if (err) {
    return <FullScreenMessage type="error" />
  }
  if (!wedding) {
    return null
  }

  const { date, galleryImages } = wedding

  return (
    <div className={cx('container')}>
      <button
        type="button"
        style={{ position: 'fixed', top: 0 }}
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        + {count}
      </button>
      <Heading date={date} />
      <Intro wedding={wedding} />
      <Invitation message={wedding?.message?.invitation} />
      <Video />
      <ImageGally images={galleryImages} />
      <Calendar date={date} />
      <Map location={wedding.location} />
      <Contact groom={wedding.groom} bride={wedding.bride} />
      <Share
        groomName={wedding.groom.name}
        brideName={wedding.bride.name}
        date={date}
      />

      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
