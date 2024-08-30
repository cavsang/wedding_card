import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './Video.module.scss'

const cx = classNames.bind(styles);


export default function Video(){
    return (
        <Section classname={cx('container')}>
            {/* source가 있을시 autoplay를 사용하고싶으면.. muted옵션도있어야함 */}
            <video autoPlay={true} muted={true} loop={true} poster='/assets/poster.jpg'>
                <source src='/assets/main.mp4' type='video/mp4'></source>
            </video>
        </Section>
    )
}