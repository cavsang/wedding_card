import classNames from 'classnames/bind'
import Section from '@/components/shared/section/Section'
import styles from './Contact.module.scss'
import Arcodion from '../Arcodion'
import { Person, PersonInfo } from '@/models/wedding'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

export default function Contact({
  groom,
  bride,
}: {
  groom: PersonInfo
  bride: PersonInfo
}) {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Arcodion label="신랑">
        <Persons  groom={groom}/>
      </Arcodion>
      <Arcodion label="신부">
        <Persons  groom={bride}/>
      </Arcodion>

    </Section>
  )
}

function Persons({groom}:{groom: PersonInfo}){
    return (
        <>
            <ContactInfo name={groom.name} account={groom.account} phoneNumber={groom.phoneNumber}/>
            {groom.parents.map((person, idx) => (
                <ContactInfo name={person?.name} account={person?.account} phoneNumber={person?.phoneNumber} key={idx}/>
            ))}
        </>
    )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <div className={cx('wrap-contact')}>
      <div className={cx('wrap-contact-info')}>
        <span>{account?.bankName} | {account?.accountNumber}</span>
        <span>{name}</span>
      </div>
      
    <ul className={cx('wrap-buttons')}>
        <li className={cx('button')}><a href={`tel:${phoneNumber}`}>전화</a></li>

        <CopyToClipboard text={`${account.bankName} ${account.accountNumber}`} onCopy={() => alert('복사가 완료되었습니다.')}>
            <li className={cx('button')}>복사</li>
        </CopyToClipboard>
        {account?.kakaopayLink && (
            <li>
                <a href={account?.kakaopayLink} className={cx('button')} target='_blank' rel='noreferrer'>
                    송금
                </a>
            </li>
        )}
    </ul>
      
    </div>
  )
}
