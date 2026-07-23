import React from 'react';
import { Card, CardContent, Grid, Typography, Link, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useI18n } from '../i18n';

const supportItems = [
  {
    href: 'https://yoomoney.ru/to/4100116522123030',
    icon: 'Y',
    iconColor: '#facc15',
    title: 'ЮMoney',
    subtitle: '4100 1165 2212 3030',
  },
  {
    href: 'https://www.donationalerts.com/r/turbohyperosplus',
    icon: 'D',
    iconColor: '#f87171',
    title: 'DonateAlerts',
    subtitleKeyRu: 'СБП / Карта',
    subtitleKeyEn: 'SBP / Card',
  },
  {
    href: 'http://t.me/EnOt15P',
    icon: null,
    iconColor: '#22d3ee',
    titleKey: 'message_author',
    subtitleKeyRu: 'USDT / Перевод',
    subtitleKeyEn: 'USDT / Transfer',
  },
  {
    href: 'https://t.me/TURBOromMiui/67',
    icon: null,
    iconColor: '#94a3b8',
    title: 'Info',
    subtitleKeyRu: 'Реквизиты',
    subtitleKeyEn: 'Details',
  },
];

export default function SupportSection() {
  const { lang, t } = useI18n();

  return (
    <Card sx={{ mt: 4, mb: 2, border: '1px solid', borderColor: 'rgba(148,163,184,0.12)', borderRadius: 2 }}>
      <CardContent sx={{ background: 'linear-gradient(90deg, rgba(239,68,68,0.08), rgba(249,115,22,0.08), rgba(234,179,8,0.08))', p: { xs: 2, sm: 3 }, '&:last-child': { pb: { xs: 2, sm: 3 } } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Box sx={{ width: 40, height: 40, borderRadius: 1.5, bgcolor: 'rgba(30,41,59,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FavoriteIcon sx={{ color: '#fb923c', fontSize: 20 }} />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: '#f1f5f9', fontWeight: 600 }}>{t.support_title}</Typography>
            <Typography variant="caption" sx={{ color: '#94a3b8' }}>{t.support_desc}</Typography>
          </Box>
        </Box>
        <Grid container spacing={1}>
          {supportItems.map((item) => (
            <Grid key={item.href} size={{ xs: 12, sm: 6, md: 3 }}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  bgcolor: 'rgba(30,41,59,0.6)',
                  borderRadius: 2,
                  px: 1.5,
                  py: 1.25,
                  transition: 'all 0.15s',
                  '&:hover': { bgcolor: 'rgba(30,41,59,0.8)' },
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 1,
                    bgcolor: 'rgba(100,116,139,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon ? (
                    <Typography variant="caption" sx={{ color: item.iconColor, fontWeight: 700, fontSize: '0.75rem' }}>
                      {item.icon}
                    </Typography>
                  ) : (
                    <FavoriteIcon sx={{ color: item.iconColor, fontSize: 16 }} />
                  )}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="caption" sx={{ color: '#cbd5e1', fontWeight: 500, display: 'block', 'a:hover &': { color: '#f1f5f9' } }}>
                    {item.title || t[item.titleKey]}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.625rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' }}>
                    {item.subtitle || (lang === 'ru' ? item.subtitleKeyRu : item.subtitleKeyEn)}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
