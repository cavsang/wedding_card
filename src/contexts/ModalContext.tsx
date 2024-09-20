import Modal from "@/components/shared/Modal"
import { ComponentProps, createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"


//ComponentProps를 이용해서 Modal의 Props를 추출해올수있다.
type ModalProps = ComponentProps<typeof Modal>

//예는 ModalProps에서 open이 제외된 props이다.
//아아. 위의 ModalProps에서 props들을 추출해오면..open속성은 항상 true일것이다.
//그러니 의미가없으니까 Omit를 이용해서 제외해주는거.
type ModalOptions = Omit<ModalProps, 'open'> 

interface ModalContextValue{
    open: (options:ModalOptions) => void
    close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defaultValues:ModalProps= {
    open: false,
    body: null,
    onRightButtonClick: () => {},
    onLeftButtonClick: () => {}
}

export function ModalContext({children}:{children: React.ReactNode}){

    const [modalState, setModalState] = useState<ModalProps>(defaultValues)

    const $portal_root = document.getElementById('root-portal');

    const open = (options:ModalOptions) => {
        setModalState({...options, open: true})
    }
    const close = () => {
        setModalState(defaultValues)
    }

    //context api는 상태가 없데이트되면 하위의자식들을 다 렌더링하는 성능적으로
    //별로안좋은게 있다.
    const values={
        open,
        close,
    }

    return (
        <Context.Provider value={values}>
            {children}
            {$portal_root && (createPortal(<Modal {...modalState}/>, $portal_root))}
        </Context.Provider>
    )
}

export function useModalContext(){
    const values = useContext(Context)
    if(values == null){
        throw new Error('Modal Context 안에서 사용해야함.')
    }
    return values;
}