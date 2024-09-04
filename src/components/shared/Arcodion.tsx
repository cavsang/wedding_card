import classNames from 'classnames/bind'
import { PropsWithChildren, useState } from 'react';
import styles from './Arcodion.module.scss'

const cx = classNames.bind(styles)

interface ArcodionProps{
    label: string;
}

export default function Arcodion({label, children}:PropsWithChildren<ArcodionProps>){


    const [click, setClick] = useState(false)

    const onClick = () => {
        setClick((c) => !c)
    }

    return (
        <div className={cx('wrap-arcodion')}>
            <div className={cx('header')} onClick={onClick}>
                <div>{label}</div>
                <div>▽</div>
            </div>
            <div className={cx('contents', (click && 'open'))}>
                {children}
            </div>
        </div>
    )
}