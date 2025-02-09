import React from 'react'

export default React.memo(function Library(props) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='32'
      viewBox='0 0 34 32'
      {...props}
    >
      <path d='M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2z'></path>
      <path d='M16 0h2l16 10v2h-34v-2l16-10z'></path>
    </svg>
  )
})
