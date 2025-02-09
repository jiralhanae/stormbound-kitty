import getRawCardData from '~/helpers/getRawCardData'
import getCostForLevel from '~/helpers/getCostForLevel'

const isCardUpgradable = ({ id, level, copies, missing }) => {
  if (level === 5) return false

  const { rarity } = getRawCardData(id)
  const costForNextLevel = getCostForLevel(missing ? 1 : level + 1)({
    rarity,
    level,
    copies,
  })

  return costForNextLevel.stones === 0
}

export default isCardUpgradable
