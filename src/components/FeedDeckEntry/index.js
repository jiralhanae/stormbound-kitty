import React from 'react'
import { useFela } from 'react-fela'
import Link from '~/components/Link'
import FeaturedDeck from '~/components/FeaturedDeck'
import FeedEntry from '~/components/FeedEntry'
import Tags from '~/components/Tags'
import capitalise from '~/helpers/capitalise'
import getFactionFromDeckID from '~/helpers/getFactionFromDeckID'

export default React.memo(function FeedDeckEntry(props) {
  const { css } = useFela()
  const faction = getFactionFromDeckID(props.id)
  const prefix = /^[aeiou]/.test(faction) ? 'an' : 'a'

  return (
    <FeedEntry icon='stack' date={props.date}>
      {props.author} has set up {prefix} {capitalise(faction)} deck with tags{' '}
      <Tags tags={props.tags} /> called{' '}
      <Link to={'/deck/' + props.id + '/detail'}>{props.name}</Link>.
      <div className={css({ maxWidth: '450px' })}>
        <FeaturedDeck {...props} />
      </div>
    </FeedEntry>
  )
})
