import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './Map.module.scss'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

declare global{
    interface Window{
        kakao: any
    }
}

export default function Map(){

    useEffect( () => {
        const script= document.createElement('script')
        //싱크가 어긋날수도있으니 autoload를 false로 꺼주고 우리가 알아서 불러ㅇ는걸로
        script.src= `<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false"></script>`
        script.async= true

        document.head.appendChild(script)

        //비동기라서 onload가 먼저될지 위에께먼저될지몰라서 autoload를 false로함.
        script.onload= () => {
            window.kakao.maps.load(() => {})
        }
    },[])


    return <Section>map</Section>
}