import { useCallback, useRef } from "react"

export default function useSubscription() {
  const subscribers = useRef<Array<() => void>>([])

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.push(callback)

    return () => {
      subscribers.current = subscribers.current.filter((cb) => cb !== callback)
    }
  }, [])

  const event = useCallback(() => {
    subscribers.current.forEach((cb) => cb())
  }, [])

  return [subscribe, event, subscribers] as const
}
