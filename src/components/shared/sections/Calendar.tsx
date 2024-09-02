import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './Calendar.module.scss'
import { format, getDay, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

import 'react-day-picker/dist/style.css'
import { DayPicker } from 'react-day-picker'

const cx = classNames.bind(styles)


//  css도 설정하기 편함
const css = `
    .rdp-month_caption {
        display:none;
    }
    .rdp-nav {
        display:none;
    }

    .rdp-day{
        cursor: default;
    }

    .rdp-root{
        --rdp-accent-color: red;
    }
    
`

export default function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section>
      <div className={cx('wrap-header')}>
        <span className={cx('txt-date')}>
          {format(weddingDate, 'yyyy.MM.dd')}
        </span>
        <span className={cx('txt-time')}>
          {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
        </span>
      </div>
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        {/* formatCaption은 달력에 title을 넣을수있다. ''는 그냥 아무것도 안보이게. */}
        <DayPicker mode='single' required disabled={{after: weddingDate, before: weddingDate}}month={weddingDate} selected={weddingDate} formatters={{formatCaption: () => ''}} />
      </div>
    </Section>
  )
}
