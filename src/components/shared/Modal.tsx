import classNames from 'classnames/bind'
import Dimmed from './Dimmed'
import styles from './Modal.module.scss'

interface ModalProps {
  open: boolean
  title?: string
  body: React.ReactNode
  rightButtonLabel?: string
  onRightButtonClick: () => void
  leftButtonLabel?: string
  onLeftButtonClick: () => void
}

const cx = classNames.bind(styles)

export default function Modal({
  open,
  title,
  body,
  rightButtonLabel='닫기',
  leftButtonLabel='확인',
  onRightButtonClick,
  onLeftButtonClick
}: ModalProps) {
  if (!open) return null

  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title && <div className={cx('txt-title')}>{title}</div>}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button type="button" onClick={onLeftButtonClick}>{leftButtonLabel}</button>
            <button type="button" onClick={onRightButtonClick}>{rightButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}
