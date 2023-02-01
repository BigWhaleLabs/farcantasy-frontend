import { BodyText } from 'components/Text'
import { proxy, useSnapshot } from 'valtio'
import { useEffect, useState } from 'preact/hooks'
import { useLocation } from 'wouter'
import Button from 'components/Button'
import Loading from 'components/Loading'
import Metadata from 'models/Metadata'
import SuspenseWithError from 'components/SuspenseWithError'
import classnames, {
  backgroundColor,
  backgroundImage,
  borderRadius,
  borderWidth,
  borders,
  cursor,
  display,
  flexDirection,
  flexGrow,
  gradientColorStops,
  justifyContent,
  padding,
  tableLayout,
  textAlign,
} from 'classnames/tailwind'
import getUsers from 'helpers/getUsers'
import idCap from 'helpers/idCap'

const pageSize = 20

const state = proxy<{
  users: Promise<(Metadata & { minted: boolean })[]> | undefined
}>({ users: undefined })

const tableFixed = classnames(tableLayout('table-fixed'), flexGrow('grow'))
const header = classnames(borders('border-b'), textAlign('text-left'))
const firstCell = classnames(padding('pl-4'))
const lastCell = classnames(padding('pr-4'))
const row = classnames(
  borders('border-b'),
  textAlign('text-left'),
  padding('py-1'),
  cursor('cursor-pointer'),
  backgroundColor('hover:bg-blue-800')
)
function ExplorerSuspended() {
  const { users } = useSnapshot(state)
  const [, setLocation] = useLocation()
  return (
    <table className={tableFixed}>
      <thead className={`${header} border-indigo-600/20`}>
        <tr>
          <th className={firstCell}>
            <BodyText>FID</BodyText>
          </th>
          <th>
            <BodyText>Name</BodyText>
          </th>
          <th>
            <BodyText>A</BodyText>
          </th>
          <th>
            <BodyText>D</BodyText>
          </th>
          <th className={lastCell}>
            <BodyText>Minted?</BodyText>
          </th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr
              className={`${row} border-indigo-600/20`}
              key={user.fid}
              onClick={() => {
                setLocation(`#/${user.fid}`)
              }}
            >
              <td className={firstCell}>
                <BodyText>{user.fid}</BodyText>
              </td>
              <td>
                <BodyText>{user.name}</BodyText>
              </td>
              <td>
                <BodyText>{user.attributes[0].value}</BodyText>
              </td>
              <td>
                <BodyText>{user.attributes[1].value}</BodyText>
              </td>
              <td className={lastCell}>
                <BodyText>{user.minted ? 'Yes' : 'No'}</BodyText>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  padding('py-4'),
  backgroundImage('bg-gradient-to-b'),
  gradientColorStops('from-indigo-900', 'to-indigo-800'),
  borderRadius('rounded'),
  borderWidth('border')
)
const buttonRow = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  padding('px-4', 'py-2')
)
export default function () {
  const [page, setPage] = useState(idCap / 20)
  useEffect(() => {
    state.users = getUsers(page * pageSize, pageSize)
  }, [page])

  return (
    <div className={`${container} border-indigo-600/20`}>
      <div className={buttonRow}>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page <= 0}
          title="<"
        />
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page >= (idCap + 1000) / 20 - 1}
          title=">"
        />
      </div>
      <SuspenseWithError
        fallback={<Loading text="Loading cards..." />}
        errorText="Failed to load the cards, try again later? Or maybe try with VPN?"
      >
        <ExplorerSuspended />
      </SuspenseWithError>
    </div>
  )
}
