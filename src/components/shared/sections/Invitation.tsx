
import classNames from 'classnames/bind'
import Section from '../section/Section'
import Text from '../Text'
import style from './Invitation.module.scss'

const cx = classNames.bind(style)

export default function Invitation({message}:{message: string}){
    return <Section classname={cx('container')}>
                <Text>{message}</Text>
            </Section>
}