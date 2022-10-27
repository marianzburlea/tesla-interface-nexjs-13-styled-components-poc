import { Box, Background } from '../component'
import type * as T from './app.type'

const getTeslaInfo = async () => {
  const result: T.TeslaResult = await (
    await fetch(
      `https://raw.githubusercontent.com/marianzburlea/simple-api/main/data-base.json`
    )
  ).json()

  return result.tesla
}

const Home = async () => {
  const list = await getTeslaInfo()

  return (
    <>
      {list.map((item, key) => (
        <Background
          section={item}
          key={item.id}
          goTo={list[key < list.length - 1 ? key + 1 : 0].id}
        >
          {item.who}
        </Background>
      ))}
    </>
  )
}

export default Home
