import React from 'react'
import Link from '~/components/Link'
import { RARITIES } from '~/constants/game'
import { BOOKS, EXPECTATIONS } from '~/constants/books'
import Page from '~/components/Page'
import BookExplanation from '~/components/BookExplanation'
import BookOutcome from '~/components/BookOutcome'
import Image from '~/components/Image'
import NumberInput from '~/components/NumberInput'
import Only from '~/components/Only'
import Row from '~/components/Row'
import Select from '~/components/Select'
import Spacing from '~/components/Spacing'
import Title from '~/components/Title'
import TogglableContent from '~/components/TogglableContent'
import CardLink from '~/components/CardLink'
import countCards from '~/helpers/countCards'
import getBookName from '~/helpers/getBookName'
import styles from './styles'

const clamp = (min, value, max) => Math.min(Math.max(Number(value), 0), max)

export default React.memo(function BooksCalculator(props) {
  const [isAdvancedMode, setIsAdvancedMode] = React.useState(false)
  const [bookType, setBookType] = React.useState('MYTHIC')
  const [target, setTarget] = React.useState('FUSION_STONES')
  const [expectations, setExpectations] = React.useState([0, 0, 0, 0])

  // Reset the default state of each mode when toggling between the 2
  React.useEffect(() => {
    if (isAdvancedMode) setTarget('FUSION_STONES')
    else setExpectations([0, 0, 0, 0])
  }, [isAdvancedMode])

  const setExpectation = (index, value) => {
    setExpectations(expectations => [
      ...expectations.slice(0, index),
      value === ''
        ? ''
        : clamp(
            0,
            Number(value),
            countCards({ rarity: Object.keys(RARITIES)[index] })
          ),
      ...expectations.slice(index + 1),
    ])
  }

  const setCommonExpectation = React.useCallback(
    value => setExpectation(0, value),
    []
  )
  const setRareExpectation = React.useCallback(
    value => setExpectation(1, value),
    []
  )
  const setEpicExpectation = React.useCallback(
    value => setExpectation(2, value),
    []
  )
  const setLegendaryExpectation = React.useCallback(
    value => setExpectation(3, value),
    []
  )

  return (
    <Page
      title='Books Calculator'
      description='Maximise the use of your resources and calculate the odds of finding a specific Stormbound card or fusion stones in a specific book'
    >
      <Row isDesktopOnly>
        <Row.Column width='1/3'>
          <Title>What is this</Title>
          <p>
            This is a calculator to estimate the odds of getting fusion stones
            or a specific card when opening a certain book, as well as the
            average amount of coins based on your collection. Huge thanks to
            Neicigam (Neicigam#0095 on Discord) for helping with the math and
            the logic making this simulator possible.{' '}
            <Link to={{ pathname: '/faq', hash: '#books-calculator' }}>
              Learn more about how it works.
            </Link>
          </p>
          <Spacing top='BASE' bottom='LARGER'>
            <form>
              <Row withNarrowGutter>
                <Row.Column>
                  <Select
                    label='Book type'
                    id='book'
                    value={bookType}
                    onChange={event => setBookType(event.target.value)}
                    data-testid='book-select'
                  >
                    {Object.keys(BOOKS).map(bookType => (
                      <option key={bookType} value={bookType}>
                        {getBookName(bookType)}
                      </option>
                    ))}
                  </Select>
                </Row.Column>

                <Row.Column>
                  <Select
                    label='Looking for'
                    id='target'
                    value={target}
                    onChange={event => setTarget(event.target.value)}
                    data-testid='target-select'
                    disabled={isAdvancedMode}
                  >
                    {Object.keys(EXPECTATIONS).map(option => (
                      <option key={option} value={option}>
                        {EXPECTATIONS[option].label}
                      </option>
                    ))}
                  </Select>
                </Row.Column>
              </Row>

              <TogglableContent
                isExpanded={isAdvancedMode}
                id='advanced-mode'
                renderToggle={toggleProps => (
                  <Link
                    {...toggleProps}
                    extend={styles.toggle}
                    onClick={() => setIsAdvancedMode(mode => !mode)}
                  >
                    {isAdvancedMode
                      ? '- Collapse advanced mode'
                      : '+ Expand advanced mode'}
                  </Link>
                )}
              >
                <p>
                  Define how many different cards of any rarity you are looking
                  for to know the odds of finding at least some of them when
                  opening a {getBookName(bookType)}.
                </p>
                <p>
                  For instance, if you’re looking for a copy of{' '}
                  <CardLink id='N2' />, a copy of <CardLink id='I4' /> and a
                  copy of <CardLink id='N8' />, set 2 for “Common cards” and 1
                  for “Legendary cards”.
                </p>
                <Row withNarrowGutter>
                  <Row.Column>
                    <NumberInput
                      label='Common cards'
                      min={0}
                      max={countCards({ rarity: 'common' })}
                      name='target-common'
                      id='target-common'
                      onChange={setCommonExpectation}
                      value={expectations[0]}
                    />
                  </Row.Column>
                  <Row.Column>
                    <NumberInput
                      label='Rare cards'
                      min={0}
                      max={countCards({ rarity: 'rare' })}
                      name='target-rare'
                      id='target-rare'
                      onChange={setRareExpectation}
                      value={expectations[1]}
                    />
                  </Row.Column>
                </Row>
                <Row withNarrowGutter>
                  <Row.Column>
                    <NumberInput
                      label='Epic cards'
                      min={0}
                      max={countCards({ rarity: 'epic' })}
                      name='target-epic'
                      id='target-epic'
                      onChange={setEpicExpectation}
                      value={expectations[2]}
                    />
                  </Row.Column>
                  <Row.Column>
                    <NumberInput
                      label='Legendary cards'
                      min={0}
                      max={countCards({ rarity: 'legendary' })}
                      name='target-legendary'
                      id='target-legendary'
                      onChange={setLegendaryExpectation}
                      value={expectations[3]}
                    />
                  </Row.Column>
                </Row>
              </TogglableContent>
            </form>
          </Spacing>{' '}
        </Row.Column>

        <Row.Column width='1/3'>
          <Title element='h2'>Outcome</Title>

          <BookExplanation book={bookType} />
          <BookOutcome
            book={bookType}
            target={target}
            isAdvancedMode={isAdvancedMode}
            expectations={expectations}
          />
        </Row.Column>

        <Only.Desktop>
          <Row.Column width='1/3'>
            <Image
              src={
                '/assets/images/books/book-' +
                bookType.toLowerCase().replace(/_/g, '-') +
                '.png'
              }
              extend={styles.book}
              alt={getBookName(bookType)}
              withAvif
              width={219}
              height={340}
              lazy
            />
          </Row.Column>
        </Only.Desktop>
      </Row>
    </Page>
  )
})
