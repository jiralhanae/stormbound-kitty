import React from 'react'

export default React.memo(function Shuffle(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M24 22h-3.172l-5-5 5-5h3.172v5l7-7-7-7v5h-4c-0.53 0-1.039 0.211-1.414 0.586l-5.586 5.586-5.586-5.586c-0.375-0.375-0.884-0.586-1.414-0.586h-6v4h5.172l5 5-5 5h-5.172v4h6c0.53 0 1.039-0.211 1.414-0.586l5.586-5.586 5.586 5.586c0.375 0.375 0.884 0.586 1.414 0.586h4v5l7-7-7-7v5z'></path>
    </svg>
  )
})
