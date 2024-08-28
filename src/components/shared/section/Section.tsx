import classNames from 'classnames/bind'
import styles from './section.module.scss'

const cx = classNames.bind(styles)

export default function Section({
  children,
  classname,
}: {
  children: React.ReactNode
  classname?: string
}) {
    //[]로 여러개의 className을 가질수있다.
  return <section className={cx(['container',classname])}>{children}</section>
}
