const link = {
  color: 'currentcolor',
  textDecorationSkip: 'skip',
  textDecorationSkipInk: 'auto',
  transition: '250ms',

  ':active': { color: 'var(--beige)' },
  ':hover': { color: 'var(--beige)' },
}

const buttonAsLink = {
  backgroundColor: 'transparent',
  border: 0,
  padding: 0,
  color: 'inherit',
  font: 'inherit',
  display: 'inline',
  textDecoration: 'underline',
  cursor: 'pointer',

  ':disabled': {
    opacity: 0.7,
    filter: 'grayscale(1)',
    cursor: 'default',
  },

  ':not(:disabled):hover': {
    color: 'var(--beige)',
  },
}

const newTab = {
  fontSize: '80%',
  marginLeft: '0.5ch',
  transform: 'translateY(10%)',
  opacity: 0.75,
}

const styles = { link, newTab, buttonAsLink }

export default styles
