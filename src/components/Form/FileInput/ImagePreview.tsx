'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null)
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="dark:text-viole-300 h-8 w-8 text-violet-500" />
      </div>
    )

  return (
    <img
      src={previewURL}
      alt=""
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}
