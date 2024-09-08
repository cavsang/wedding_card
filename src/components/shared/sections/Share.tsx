import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './Share.module.scss'
import { useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

const cx = classNames.bind(styles);

declare global{
    interface Window{
        Kakao: any
    }
}

export default function Share({groomName, brideName, date}:{groomName: string, brideName:string, date:string}){

    useEffect(() => {
        const script = document.createElement('script')
        script.src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js'
        script.async=true

        document.head.appendChild(script)
        script.onload = () => {
            if(!window.Kakao.isInitialized()){ //초기화가 안되어있다면..
                window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
            }
        }
    },[])

    const handleShareKakao = () => {
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content:{
                title: `${groomName} ♥ ${brideName} 결혼합니다.`,
                description: `${format(parseISO(date), 'M월 d일 eee aaa h시' , {locale: ko})}`,
                imageUrl: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/06/web-20180622135211056520.png',
                link: {
                    mobileWebUrl: window.location.origin,
                    webUrl: window.location.origin
                },
            },
            buttons:[
                {
                    title: '청첩장 보기',
                    link: {
                        mobileWebUrl: window.location.origin,
                        webUrl: window.location.origin
                    }
                },
            ]
            
        })
    }

    return (
        <Section title='공유하기'>
            <div className={cx('wrap-share')}>
                <button onClick={handleShareKakao}>카카오톡</button>
                <button>링크</button>
            </div>
        </Section>
    )
}