import React from 'react'
import { TIER_COLORS } from '~/constants/list'
import ListBuilderTier from '~/components/ListBuilderTier'
import Spacing from '~/components/Spacing'

export default React.memo(function ListBuilderTierList(props) {
  return props.tiers.map((tier, index) => (
    <Spacing bottom='BASE' key={index}>
      <ListBuilderTier
        {...tier}
        color={TIER_COLORS[index]}
        prefix={`tier-${index}-`}
        isEditable={false}
      />
    </Spacing>
  ))
})
