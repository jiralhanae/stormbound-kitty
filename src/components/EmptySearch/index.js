import React from 'react'
import { useFela } from 'react-fela'
import CTA from '~/components/CTA'
import Image from '~/components/Image'
import styles from './styles'

export default React.memo(function EmptySearch(props) {
  const { css } = useFela()

  return (
    <div className={css(styles.container)}>
      <Image
        extend={styles.image}
        alt='Sparkly Kitties'
        src='/assets/images/cards/sparkly_kitties.png'
        withAvif
        width={250}
        height={280}
        lazy
      />
      <span className={css(styles.title)}>
        {props.title || 'No results found'}
      </span>
      <p className={css(styles.copy)}>
        It looks like there are no results for your search… Try adjusting your
        search parameters, or reset all filters and try again.
      </p>
      <CTA type='button' onClick={props.resetFilters}>
        Reset filters
      </CTA>
    </div>
  )
})
