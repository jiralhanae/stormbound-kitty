const header = {
  display: 'flex',
  margin: '0 calc(var(--s-base) * -1) var(--s-base)',
  alignItems: 'flex-end',
}

const name = {
  textTransform: 'uppercase',
  marginTop: 0,
  marginBottom: 0,
  color: 'var(--beige)',
  fontSize: '100%',
  fontWeight: 'normal',
}

const item = {
  flex: '1 1 100%',
  padding: '0 var(--s-base)',

  medium: {
    flexBasis: 'auto',

    ':last-child': {
      flexGrow: 0,
      display: 'block',
    },
  },
}

const move = {
  display: 'inline-block',
  ':last-child': { marginLeft: '1.5em' },
}

const buttons = {
  display: 'none',
  marginBottom: '0.4em',
  marginLeft: 'var(--s-smaller)',

  medium: { display: 'flex' },
}

const styles = { header, name, item, move, buttons }

export default styles
