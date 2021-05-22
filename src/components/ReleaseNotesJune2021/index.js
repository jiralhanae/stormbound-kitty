import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../Article'
import CardLink from '../CardLink'
import CardBuilderCardDisplay from '../CardBuilderCardDisplay'
import FAQSection from '../FAQSection'
import Image from '../Image'
import Info from '../Info'
import NerfCompensationInfo from '../NerfCompensationInfo'
import ReleaseNotes from '../ReleaseNotes'
import Row from '../Row'
import Table from '../Table'
import { Coins, Rubies, Stones } from '../Resource'
import ResourceIcon from '../ResourceIcon'
import TogglableContent from '../TogglableContent'
import Title from '../Title'
import getInitialCardData from '../../helpers/getInitialCardData'
import displayBundle from '../../helpers/displayBundle'
import getCalendarValue from '../../helpers/getCalendarValue'
import getRewardLabel from '../../helpers/getRewardLabel'
import rewards from './rewards'

export default React.memo(function ReleaseNotesJune2021(props) {
  const [isTableExpanded, expandTable] = React.useState(false)

  return (
    <ReleaseNotes id='06_2021'>
      <Article.Narrow>
        <p>
          Hello Stormbounders! A new version of Stormbound is coming early June,
          bringing balance changes, new cards, some economy changes, bug fixes
          and some exclusive offers as usual!
        </p>

        <ol style={{ columns: '16em' }}>
          <li>
            <a href='#balance-changes'>Balance changes</a>
          </li>
          <li>
            <a href='#new-cards'>New cards</a>
          </li>
          <li>
            <a href='#victory-coins-update'>Victory coins update</a>
          </li>
          <li>
            <a href='#daily-check-in-calendar'>Daily check-in calendar</a>
          </li>
          <li>
            <a href='#new-avatars'>New avatars</a>
          </li>
          <li>
            <a href='#bug-fixes'>Bug fixes</a>
          </li>
          <li>
            <a href='#faq'>FAQ</a>
          </li>
        </ol>

        <Info icon='heart' title='Important notice'>
          <p>
            While I have your attention, please remember the pandemic is not
            over, even if you have been vaccinated. You can still carry the
            disease and make people sick.
          </p>
          <p>
            So wear a mask and avoid unnecessary travels—especially if you live
            in an area with rampant COVID-19 cases. It takes everyone’s effort
            to slow down this pandemic. Do the right thing. 🙏
          </p>
        </Info>

        <Title id='balance-changes'>Balance changes</Title>

        <p>This release, like any other, brings some balance changes.</p>

        <ul>
          <li>
            <CardLink id='I5' /> now inflicts 3 self-damage per turn (up from
            2).
          </li>
          <li>
            <CardLink id='F13' />
            ’s strength is now 4/5/5/7/8 (up from 3/4/4/6/7).
          </li>
          <li>
            <CardLink id='N55' />
            ’s mana cost is now 7 (down from 8).
          </li>
          <li>
            <CardLink id='N73' />
            ’s strength is now 3/4/5/6/7 (up from 3/4/4/5/6).
          </li>

          <li>
            <CardLink id='S3' />
            ’s ability is updated as follow:{' '}
            <span className='Highlight'>
              If played with no surrounding enemies, return the copy of this
              card to your hand with +1 strength
            </span>
            . The copy gains 1 strength every time it comes back in hand. If it
            does not, the additional strength is lost and the copy has the
            original strength. The base strength is now 1/2/3/4/5 (down from
            2/3/4/5/6) and the ability is made surrounding.
          </li>
        </ul>

        <NerfCompensationInfo ids={['I5']} />

        <Title id='new-cards'>New cards</Title>
        <p>
          Two new cards are joining the neutral faction, one rare construct and
          one common ancient, introducing a bit of a movement twist!
        </p>
      </Article.Narrow>

      <Article.Embed>
        <CardBuilderCardDisplay {...getInitialCardData('N84')} />
        <CardBuilderCardDisplay {...getInitialCardData('N83')} />
      </Article.Embed>

      <Article.Narrow>
        <Row desktopOnly wideGutter style={{ alignItems: 'center' }}>
          <Row.Column>
            <Image
              src='/assets/images/releases/june_cards_packs.png'
              alt='Eternal pack ($9.99): 10 copies of Eternal Ethereals, 5 fusions stones and 750 coins; Headless pack ($9.99): 5 copies of Headless Hotheads, 5 fusions stones and 750 coins'
              withAvif
            />
          </Row.Column>
          <Row.Column>
            <p>
              As usual, there will be exclusive packs to quickly get access to
              some copies of the new cards between June 7th and June 14th.
            </p>

            <p>They will each cost $9.99, and will grant the following: </p>

            <ul>
              <li>
                <ResourceIcon resource='COMMON' /> 10 copies of{' '}
                <CardLink id='N84' />
                , <Stones amount={5} /> and <Coins amount={750} />.
              </li>
              <li>
                <ResourceIcon resource='RARE' /> 5 copies of{' '}
                <CardLink id='N83' />
                , <Stones amount={5} /> and <Coins amount={750} />.
              </li>
            </ul>
          </Row.Column>
        </Row>

        <Title id='victory-coins-update'>Victory coins update</Title>

        <p>
          Victory coins will be increased across the board in ranked matches,
          proportionally to the league of the player.
        </p>

        <ul>
          <li>
            In Starter, <span style={{ color: 'var(--iron)' }}>Iron</span>,{' '}
            <span style={{ color: 'var(--bronze)' }}>Bronze</span>,{' '}
            <span style={{ color: 'var(--silver)' }}>Silver</span> and{' '}
            <span style={{ color: 'var(--gold)' }}>Gold</span> leagues, a
            victory will yield <Coins amount={10} /> + an additional{' '}
            <Coins amount={10} /> for watching an ad or for having the Premium
            Pass.
          </li>
          <li>
            In <span style={{ color: 'var(--platinum)' }}>Platinum</span>{' '}
            league, a victory will yield <Coins amount={15} /> + an additional{' '}
            <Coins amount={15} /> for watching an ad or for having the Premium
            Pass.
          </li>
          <li>
            In <span style={{ color: 'var(--diamond)' }}>Diamond</span> league,
            a victory will yield <Coins amount={20} /> + an additional{' '}
            <Coins amount={20} /> for watching an ad or for having the Premium
            Pass.
          </li>
          <li>
            In <span style={{ color: 'var(--heroes)' }}>Heroes</span> league, a
            victory will yield <Coins amount={25} /> + an additional{' '}
            <Coins amount={25} /> for watching an ad or for having the Premium
            Pass.
          </li>
        </ul>

        <p>Additionally, it is worth nothing that:</p>

        <ul>
          <li>
            Victories while playing Brawl will yield <Coins amount={10} /> + an
            additional <Coins amount={10} /> for watching an ad or for having
            the Premium Pass, regardless of the league of the player.
          </li>

          <li>
            Victories while playing Steam will yield <Coins amount={10} /> + an
            additional <Coins amount={10} /> for having the Premium Pass since
            ads cannot be watched on this platform.
          </li>
        </ul>

        <p>
          To balance out the significant increase in victory coins in higher
          leagues, the monthly chest rewards have been reduced as follow:
        </p>

        <ul>
          <li>
            The <span style={{ color: '#caf9ff' }}>Heroes</span> chest now
            contains <Coins amount={2000} /> (down from 3000) and{' '}
            <Rubies amount={70} /> (down from 100).
          </li>
          <li>
            The <span style={{ color: '#c8c0df' }}>Diamond</span> chest now
            contains <Coins amount={1500} /> (down from 1800). Rubies untouched.
          </li>
          <li>The chest for all the other leagues remain untouched.</li>
        </ul>

        <Info icon='equalizer' title='Calculators'>
          <p>
            You will be pleased to know that both the{' '}
            <Link to='/calculators/income'>income calculator</Link> and{' '}
            <Link to='/calculators/brawl'>Brawl calculator</Link> have been
            updated to reflect these changes.
          </p>
        </Info>

        <Title id='daily-check-in-calendar'>Daily check-in calendar</Title>

        <p>
          The daily check-in and its Premium version continue this month with
          similar rewards to last month’s (minus one day). This is the total
          value for the calendar, free and premium respectively (including free
          rewards within the premium one):{' '}
        </p>

        <ul>
          <li>
            Total free rewards:{' '}
            {displayBundle(getCalendarValue(rewards, 'FREE'))}
          </li>
          <li>
            Total Premium (including free) rewards:{' '}
            {displayBundle(getCalendarValue(rewards, 'PREMIUM'))}
          </li>
        </ul>

        <TogglableContent
          isExpanded={isTableExpanded}
          id='reward-table'
          renderToggle={toggleProps => (
            <p>
              Refer to the following table to get the rewards breakdown per day.{' '}
              <button
                {...toggleProps}
                type='button'
                className='ButtonAsLink'
                onClick={() => expandTable(isExpanded => !isExpanded)}
              >
                {isTableExpanded
                  ? '- Hide table breakdown'
                  : '+ Show table breakdown'}
              </button>
            </p>
          )}
        >
          <Table>
            <thead>
              <tr>
                <th style={{ width: '100px' }}>Day</th>
                <th>Free</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {rewards.map(([free, premium], index) => (
                <tr key={index}>
                  <td style={{ width: '100px' }}>#{index + 1}</td>
                  <td>{getRewardLabel(free, true)}</td>
                  <td>{getRewardLabel(premium, true)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TogglableContent>

        <Title id='new-avatars'>New avatars</Title>

        <p>
          There will be 6 new avatars added to the game: 3 for everyone at{' '}
          <Coins amount={1000} /> a piece, and 3 premium avatars for{' '}
          <Rubies amount={200} />. In case you missed it,{' '}
          <Link to='/fan-kit/avatars'>
            all avatar images are now available in the fan-kit
          </Link>
          —courtesy of Sheepyard.
        </p>

        <Row>
          <Row.Column width='1/6'>
            <Image
              src='/assets/images/avatars/S16.png'
              alt='Dreadfauns'
              withoutWebp
            />
          </Row.Column>
          <Row.Column width='1/6'>
            <Image
              src='/assets/images/avatars/S1.png'
              alt='Doppelbocks'
              withoutWebp
            />
          </Row.Column>
          <Row.Column width='1/6'>
            <Image
              src='/assets/images/avatars/N30.png'
              alt='Bluesail Raiders'
              withoutWebp
            />
          </Row.Column>
          <Row.Column width='1/6'>
            <Image
              src='/assets/images/avatars/aqua_robot.png'
              alt='Aqua Robot'
              withoutWebp
            />
          </Row.Column>
          <Row.Column width='1/6'>
            <Image
              src='/assets/images/avatars/knight.png'
              alt='Knight'
              withoutWebp
            />
          </Row.Column>
          <Row.Column width='1/6'>
            <Image
              src='/assets/images/avatars/draconic_humanoid.png'
              alt='Draconic humanoid'
              withoutWebp
            />
          </Row.Column>
        </Row>

        <Title id='bug-fixes'>Bug fixes</Title>

        <p>
          This release will bring quite a few interesting bug fixes as well:
        </p>

        <ul>
          <li>
            A potential fix for the{' '}
            <Link to='/guides/known-bugs#three-cards-in-hand'>
              issue with the fourth card missing from the hand
            </Link>
            .
          </li>
          <li>A fix for the bug with upside-down cards in Brawl rewards.</li>
          <li>A fix for the persistent shop notification icon.</li>
          <li>
            A fix for the status effects remaining in place after a frozen unit
            is pushed.
          </li>
          <li>A fix for the incorrect friend filter icons in Steam version.</li>
        </ul>

        <FAQSection
          id='faq'
          title='FAQ'
          entries={[
            {
              id: 'release-date',
              question: 'When is the update going to be released?',
              answer:
                'The balance changes will be deployed with the season reset as usual. The two new cards will be available from June 7th.',
            },
          ]}
        />
      </Article.Narrow>
    </ReleaseNotes>
  )
})
