import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './Map.module.scss'
import { useEffect, useRef } from 'react'
import { Location } from '@/models/wedding'

const cx = classNames.bind(styles)

declare global{
    interface Window{
        kakao: any
    }
}

export default function Map({location}:{location: Location}){

    const mapContainer = useRef(null)

    useEffect( () => {
        const script= document.createElement('script')
        //싱크가 어긋날수도있으니 autoload를 false로 꺼주고 우리가 알아서 불러ㅇ는걸로
        script.src= `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
        script.async= true

        document.head.appendChild(script)

        //비동기라서 onload가 먼저될지 위에께먼저될지몰라서 autoload를 false로함.
        script.onload= () => {
            window.kakao.maps.load(() => {
                const position = new window.kakao.maps.LatLng(location.lat,location.lng)
                const options = {
                    center: position,
                    level: 3
                }

                const marker = new window.kakao.maps.Marker({
                    position,
                })

                const map = new window.kakao.maps.Map(mapContainer.current, options)
                marker.setMap(map)
            })
        }
    },[location])


    return <Section>
        {/* 높이와 넓이를 주지않으면 화면에 나오지않음.  */}
        <div className={cx('wrap-map')}>
            <div className={cx('map')} ref={mapContainer}></div>
            <a href={location.link} className={cx('btn-find-way')} target="_blank">길찾기</a>
        </div> 

        <div>
            <WayToCome label='버스' list={location.waytocome.bus}/>
            <WayToCome label='지하철' list={location.waytocome.metro}/>
        </div>
        
    </Section>
}


function WayToCome({label, list}:{label: React.ReactNode, list:string[]}){
    return (
        <div className={cx('wrap-waytocome')}>
            <div>{label}</div>
            <ul>
                {list.map((way, idx) => (
                    <li key={idx}>{way}</li>
                ))}
            </ul>
        </div>
    )
}