import classNames from "classnames/bind"
import Section from "@/components/shared/section/Section"

import styles from './Intro.module.scss'
import {Person, Wedding} from '@/models/wedding'
import { format, parseISO } from "date-fns"
import {ko} from 'date-fns/locale'
import Text from "../Text"

const cx = classNames.bind(styles)

export default function Intro({wedding}:{wedding: Wedding}){
    return (
       <Section classname={cx('container')}>
            <div className={cx('wrap-persons')}>
                <span>{wedding?.groom?.name}</span>
                <div className={cx('ico-heart')}>♥</div>
                <span>{wedding?.bride?.name}</span>
            </div>

            <div className={cx('wrap-location')}>
                <div>
                    <span>
                        {format(parseISO(wedding?.date),'yyyy년.M월.d일 eeee',{locale: ko}) }
                    </span>
                </div>
                <div>
                    <span>
                        {wedding?.location?.address}
                    </span>
                </div>
            </div>

            <div className={cx('wrap-intro')}>
                <Text>{wedding?.message?.intro}</Text>
            </div>
       </Section>
    )
}