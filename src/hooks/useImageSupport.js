import React from 'react'
import useLocalStorage from '~/hooks/useLocalStorage'
import supportsImageFormat from '~/helpers/supportsImageFormat'

const useImageSupport = () => {
  const [supportsAvif, setSupportsAvif] = useLocalStorage('sk.avif', false)
  const [supportsWebp, setSupportsWebp] = useLocalStorage('sk.webp', true)

  React.useEffect(() => {
    supportsImageFormat('webp').then(setSupportsWebp)
    supportsImageFormat('avif').then(setSupportsAvif)
  }, [setSupportsWebp, setSupportsAvif])

  return { supportsWebp, supportsAvif }
}

export default useImageSupport
