import classNames from 'classnames/bind'
import styles from './ImageViewer.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './swiper.css'

const cx = classNames.bind(styles)

export default function ImageViewer({
  images,
  open,
  selectedIdx,
  onImgClose
}: {
  images: string[],
  open: boolean,
  selectedIdx: number ,
  onImgClose: () => void
}) {

    if(!open){
        return null
    }
    
    return (
        //modal에서 깔리는 배경화면같은걸 dimmed라고한다.
        <div className={cx('dimmed')}>
            <button className={cx('closeBtn')} type='button' onClick={onImgClose}>X</button>
            <Swiper spaceBetween={20} slidesPerView={1} loop={true} initialSlide={selectedIdx} >
            {images.map((src, idx) => {
                return (
                <SwiperSlide key={idx}>
                    <img src={src} alt="imgview" />
                </SwiperSlide>
                )
            })}
            </Swiper>
        </div>
        )
    
}
