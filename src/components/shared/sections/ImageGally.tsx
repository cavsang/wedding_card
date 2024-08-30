import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './ImageGally.module.scss'
import ImageViewer from '@/components/imageViewer/ImageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)
const imgLoad: boolean = false

export default function ImageGally({
  images
}: {
  images: string[]
}) {

  const [selectedIdx, setSelectedIdx] = useState(-1);
  const open = selectedIdx > -1

  const onImgOpen = (idx: number) => {
    setSelectedIdx(idx);
  }

  const onImgClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li className={cx('wrap-image')} key={idx}>
              <img src={src} alt="사진첩 이미지" onClick={() => onImgOpen(idx)}></img>
            </li>
          ))}
        </ul>
      </Section>

      <ImageViewer images={images} open={open} selectedIdx={selectedIdx} onImgClose={onImgClose} />
    </>
    
  )
}
