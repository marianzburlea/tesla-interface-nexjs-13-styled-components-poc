import { useServerInsertedHTML } from 'next/navigation'
import { useStyledComponentsRegistry } from '../lib'
import type { IApp } from '../lib'

const RootStyleRegistry = ({ children }: IApp) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry()

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>
  })

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}

export default RootStyleRegistry
