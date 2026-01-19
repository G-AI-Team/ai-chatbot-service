import type { FC } from 'react'
import { cn } from '@/utils/classnames'
import { basePath } from '@/utils/var'

type LogoEmbeddedChatHeaderProps = {
  className?: string
}

const LogoEmbeddedChatHeader: FC<LogoEmbeddedChatHeaderProps> = ({
  className,
}) => {
  return (
    <img
      src={`${basePath}/logo/g-group.png`}
      alt="logo"
      className={cn('block h-6 w-auto', className)}
    />
  )
}

export default LogoEmbeddedChatHeader
