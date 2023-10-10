import { ReactNode } from 'react'
import {cn} from '@/lib/utils'

const MaxWidthWebWrapper = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    // cn merges the incoming classNames together
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ", className)}>
      {children}
    </div>
  )
}

export default MaxWidthWebWrapper