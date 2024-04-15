import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react'

const Footer = () => {
    const t = useTranslations('Footer');
  return (
    <Typography>{t('copyright')}</Typography>
  )
}

export default Footer