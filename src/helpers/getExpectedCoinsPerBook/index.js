import { RARITIES, RARITY_COPIES } from '~/constants/game'
import { BOOKS } from '~/constants/books'
import arrayPad from '~/helpers/arrayPad'
import countCards from '~/helpers/countCards'
import getDrawingSequences from '~/helpers/getDrawingSequences'

const CARD_COUNTS = Object.keys(RARITIES).map(rarity => countCards({ rarity }))

/**
 * Return an array of sequences filled with 0 and 1 where 0 means the card in
 * the collection is not maxed out and 1 means the card is level 5 in the
 * collection
 * @param {Number} expected
 * @param {Number} length
 */
const getPossibleSequences = (expected, length) => {
  const sequences = []

  for (let i = 0; i < 2 ** length; i++) {
    const binary = (i >>> 0).toString(2)
    const binaryArray = binary.split('').map(Number)
    sequences.push(arrayPad(binaryArray, length, 0))
  }

  return sequences.filter(
    sequence => sequence.filter(item => item === 1).length === expected
  )
}

const modifySequence = (sequence, rarity, sequenceRarity) => {
  const result = arrayPad([], sequence.length, 0)

  for (let i = 0, j = 0; i < sequence.length; i++) {
    if (sequence[i] === rarity) {
      result[i] = sequenceRarity[j++]
    }
  }

  return result
}

/**
 * @param {Number} rarity - Rarity index, from 0 to 3
 * @param {Number} cards - ?
 * @param {Number} maxedCards - Amount of cards level 5 for this rarity
 * @param {Number[]} percentiles - Drawing odds per rarity
 * @param {Number[][]} sequences - Drawing sequences
 * @return {Number} Probability
 */
const getProbability = (rarity, cards, maxedCards, percentiles, sequences) => {
  let total = 0

  sequences.forEach(sequence => {
    const cardsFromRarity = sequence.filter(draw => draw === rarity).length

    if (cardsFromRarity < cards) return

    const possibleSequences = getPossibleSequences(cards, cardsFromRarity)

    possibleSequences.forEach(sequenceRarity => {
      const newSequence = modifySequence(sequence, rarity, sequenceRarity)
      const pools = CARD_COUNTS.slice(0)
      let maxed = maxedCards

      total += sequence.reduce((probability, cardRarity, index) => {
        probability *= percentiles[cardRarity]

        if (newSequence[index]) {
          probability *= maxed / pools[cardRarity]
          maxed--
        } else if (rarity === cardRarity) {
          probability *= (pools[cardRarity] - maxed) / pools[cardRarity]
        }

        pools[cardRarity]--

        return probability
      }, 1)
    })
  })

  return total
}

/**
 * Return the expected number of maxed out cards we can get, for each rarity
 * @param {Number} rarityIndex - Rarity index, from 0 to 3
 * @param {String} bookType - Type of book (e.g. `MYTHIC`)
 * @param {Number} maxedCards - Amount of cards level 5 for this rarity
 * @param {Number[][]} sequences - Drawing sequences
 * @return {Number}
 */
const countExpectedMaxedCards = (
  rarityIndex,
  bookType,
  maxedCards,
  sequences
) => {
  const { draws, percentiles } = BOOKS[bookType]
  let total = 0

  // `i` represents how many of those level 5 cards we will get in the sequence
  // knowing that we can’t have more than the total level 5 cards or more than
  // the 6 cards in the book
  for (let i = 1; i < Math.min(maxedCards, draws) + 1; i++) {
    total +=
      i * getProbability(rarityIndex, i, maxedCards, percentiles, sequences)
  }

  return total
}

/**
 * @param {Card[]} collection - Current collection
 * @return {Number[]} Amount of cards level 5 per rarity
 */
const getMaxedCardsPerRarity = collection =>
  Object.keys(RARITIES).map(
    (rarity, index) =>
      collection.filter(card => card.rarity === rarity && card.level === 5)
        .length
  )

/**
 * @param {Card[]} collection - Current collection
 * @param {String} bookType - Type of book (e.g. `MYTHIC`)
 * @return {Number} Expected coins for given book type
 */
const getExpectedCoinsPerBook = (collection, bookType) => {
  const { draws } = BOOKS[bookType]
  const allMaxedCardsPerRarity = getMaxedCardsPerRarity(collection)
  const rarities = Object.keys(RARITY_COPIES)
  const sequences = getDrawingSequences(draws)

  return rarities.reduce((total, rarity, index) => {
    const maxedCardForRarity = allMaxedCardsPerRarity[index]
    const { coinsPerExtraCopy } = RARITY_COPIES[rarity]
    const expectedCards = countExpectedMaxedCards(
      index,
      bookType,
      maxedCardForRarity,
      sequences
    )

    return total + coinsPerExtraCopy * expectedCards
  }, 0)
}

export default getExpectedCoinsPerBook
