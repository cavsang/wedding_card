import { useModalContext } from "@/contexts/ModalContext"
import { Wedding } from "@/models/wedding"
import { useEffect, useRef } from "react"

export default function AttendCountModal({wedding}:{wedding: Wedding}){

    const {open, close} = useModalContext()

    const haveSeenModal = localStorage.getItem('@have-seen-modal')

    //useEffect를 하면 값이 counting될때마다.. 새로그리게된다,비효율적
    const ref = useRef<HTMLInputElement>(null)
    
    useEffect(() => {

        if(haveSeenModal){
            return
        }

        open({
            title: `현재 참석자 ${wedding.attendCount} 명`,
            body: (
                <div>
                    <input placeholder="참석가능인원을 추가"
                         style={{width: '100%'}} ref={ref}></input>
                </div>
            ),
            onLeftButtonClick: async () => {

                if(!ref.current){
                    return 
                }

                await fetch('',{
                    method: 'PUT',
                    body: JSON.stringify({
                        ...wedding,
                        attendCount: wedding.attendCount + Number(ref.current?.value),
                    }),
                    headers: {
                        'Content-Type' : 'applictaion/json',
                    }
                })
                localStorage.setItem('@have-seen-modal', 'true')
                close()
             },
            onRightButtonClick: () => { 
                localStorage.setItem('@have-seen-modal', 'true')
                close()
            },
        })
    },[open, close, wedding]) 
    return  null
}