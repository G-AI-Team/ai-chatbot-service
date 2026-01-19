'use client'

import * as React from 'react'
import { useTranslation } from 'react-i18next'

const DatasetFooter = () => {
  const { t } = useTranslation()

  return (
    <footer className="shrink-0 px-12 py-6">
    </footer>
  )
}

export default React.memo(DatasetFooter)
