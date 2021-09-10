import { useState } from "react"

export const useFetching = (callback) => {
  const [isLoading, setIsLOading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async() => {
    try {
      setIsLOading(true)
      await callback()
    } catch (e){
      setError(e.message)
    }finally {
      setIsLOading(false)
    }
  }

  return [fetching, isLoading, error]

}