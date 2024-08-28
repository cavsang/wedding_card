import classNames from 'classnames/bind'
import styles from './FullScreenMessage.module.scss'

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

const cx = classNames.bind(styles)

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return <div className={cx('container')}>{type === 'loading' ? <Heart /> : <Error />}</div>
}

function Heart() {
  return (
    <svg className={cx('ico-heart')} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g data-name="1" id="_1">
        <path d="M255.13,420.36a15.07,15.07,0,0,1-3.65-.45c-53.3-13.37-97.4-36.17-131.06-67.77C91.49,325,70.91,291.54,60.92,255.4c-7.2-26-8.71-52.67-4.36-77s14.11-44.65,28.26-58.8c35.66-35.66,89-36.13,126-20.79,16.93,7,31.31,17.42,41.6,30.1q1.39,1.71,2.67,3.47,1.29-1.76,2.68-3.47c10.28-12.68,24.67-23.09,41.6-30.1,37-15.34,90.38-14.87,126,20.79,14.15,14.15,23.92,34.48,28.26,58.8s2.84,51-4.36,77c-10,36.14-30.57,69.59-59.5,96.74-33.66,31.6-77.76,54.4-131.07,67.77A15,15,0,0,1,255.13,420.36ZM162.51,118.94c-23.67,0-44,9.35-56.48,21.83C85,161.85,78.3,205.7,89.83,247.41c8.53,30.82,26.2,59.48,51.12,82.86,29.14,27.35,67.54,47.39,114.18,59.61,46.65-12.22,85.05-32.26,114.19-59.61,24.91-23.38,42.59-52,51.11-82.86,11.54-41.71,4.88-85.56-16.19-106.64-18.64-18.63-54.73-30.28-93.35-14.28-25.52,10.57-40.76,29.63-40.76,51a15,15,0,0,1-30,0c0-21.37-15.23-40.43-40.75-51A96.1,96.1,0,0,0,162.51,118.94Z" />
      </g> 
    </svg>
  )
}

function Error() {
  return (
    <svg className={cx('ico-error')}
      fill="none"
      height="24"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1213 20.364L17.2427 18.2427M17.2427 18.2427L19.364 16.1213M17.2427 18.2427L15.1213 16.1213M17.2427 18.2427L19.364 20.364"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 13V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V14C3 15.1046 3.89543 16 5 16H11"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 11.01L12.01 10.9989"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 11.01L16.01 10.9989"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 11.01L8.01 10.9989"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default FullScreenMessage
