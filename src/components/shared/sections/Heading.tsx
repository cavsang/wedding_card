import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './Heading.module.scss'
import { format, getDay, parseISO } from 'date-fns';

const cx = classNames.bind(styles);

const DAYS=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wendsday',
    'Thursday',
    'Friday',
    'Saturday',
]


export default function Heading({date}:{date: string}){

    const weddingDate = parseISO(date)

    return (
        <Section classname={cx('container')}>
            <div className={cx('txt-date')}>{format(date, 'yy.MM.dd')}</div>
            <div className={cx('txt-day')}>{DAYS[getDay(date)]}</div>
        </Section>
    )
}
