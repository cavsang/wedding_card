import getFetch from '@/api/wedding'
import { Wedding } from '@/models/wedding'
import { useQuery } from 'react-query'

export function useWedding() {

  const {data, isLoading, error} = useQuery<Wedding>('wedding', () =>
    getFetch('http://localhost:8888/wedding').then((response) => {
      if (response.ok === false) {
        throw new Error('청첩장정보 불러오다 오류')
      }
      return response.json()
    }),{
        suspense: true
    }
  )
  return { wedding:data, err:error }
}
