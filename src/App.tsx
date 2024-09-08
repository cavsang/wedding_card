import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import FullScreenMessage from './components/shared/FullScreenMessage'
import Heading from '@/components/shared/sections/Heading'
import Video from '@/components/shared/sections/Video'
import {Wedding} from '@/models/wedding'
import ImageGally from './components/shared/sections/ImageGally'
import Intro from './components/shared/sections/Intro'
import Invitation from './components/shared/sections/Invitation'
import Calendar from '@/components/shared/sections/Calendar'
import Map from '@/components/shared/sections/Map'
import Contact from './components/shared/sections/Contact'
import Share from './components/shared/sections/Share'

const cx = classNames.bind(styles)

function App() {

  const [wedding, setWedding] = useState<Wedding | null>()
  const [err, setErr] = useState(false)

  useEffect(() => {
    //비동기 해결방법, 1.callback, 2.promise, 3.async/await
     fetch('http://localhost:8888/wedding').then((response) => {

        if(response.ok === false){
          throw new Error('청첩장정보 불러오다 오류');
        }

        return response.json()
        //setWedding(response.json()) //이게안됨 그래서 밑의 then()으로...
     }).then((data) => {
        setWedding(data);
     }).catch(e => {
        console.log('에러발생',e );
        setErr(true)
     }).finally(() => {
        //promise에도 finally가있구나.
     });
  },[])//의존성을 비우면 최초에 1번만 호출

  if(err){
    return <FullScreenMessage type='error'/>
  }

  if(!wedding){
    return <FullScreenMessage type='loading' />
  }

  if(!wedding){
    return null
  }


  const{date, galleryImages} = wedding;

  return (
    <div className={cx('container')}>
        <Heading date={date}/>
        <Intro wedding={wedding}/>
        <Invitation message={wedding?.message?.invitation}/>
        <Video />
        <ImageGally images={galleryImages} />
        <Calendar date={date}/>
        <Map location={wedding.location}/>
        <Contact groom={wedding.groom} bride={wedding.bride}/>
        <Share groomName={wedding.groom.name} brideName={wedding.bride.name} date={date}/> 
    </div>
  )
}

export default App
