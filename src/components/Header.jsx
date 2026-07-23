import React from 'react';
import { Box, Typography, Link, Chip, Button } from '@mui/material';
import { useI18n } from '../i18n';
import { formatDate } from '../data/state';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import SendIcon from '@mui/icons-material/Send';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const links = [
  { href: 'https://t.me/TURBOromMiui', labelKey: 'channel', icon: TelegramIcon, color: '#60a5fa' },
  { href: 'https://t.me/TURBOCommunication', labelKey: 'chat', icon: ChatBubbleOutlinedIcon, color: '#a78bfa' },
  { href: 'http://t.me/EnOt15P', labelKey: 'message_author', icon: SendIcon, color: '#22d3ee' },
];

export default function Header({ meta, onOpenPlus }) {
  const { lang, setLang, t } = useI18n();
  const lastUpdate = formatDate(meta.last_update || '');

  return (
    <Box component="header" sx={{ mb: 4 }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          bgcolor: '#0f172a',
          border: '1px solid',
          borderColor: 'rgba(148,163,184,0.12)',
          p: { xs: 2.5, sm: 3 },
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(20,184,166,0.05), transparent, rgba(249,115,22,0.05))',
            pointerEvents: 'none',
          }}
        />
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
          <Box
            component="img"
            src="assets/images/turbo-logo.webp"
            alt="TURBO OS"
            sx={{ height: { xs: 40, sm: 96 }, objectFit: 'contain', flexShrink: 0 }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.5, flexShrink: 0, minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
              <Box sx={{ textAlign: 'right', minWidth: 0 }}>
                <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 600, fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                  {t.created_by}{' '}
                  <Box component="span" sx={{ color: '#f1f5f9' }}>EnOt15P</Box>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 0.25 }}>
                  <Link href="http://4pda.to/forum/index.php?showuser=9976456" target="_blank" rel="noopener" underline="none" sx={{ color: '#94a3b8', fontSize: { xs: '0.625rem', sm: '0.75rem' }, '&:hover': { color: '#e2e8f0' } }}>4PDA</Link>
                  <Typography variant="caption" sx={{ color: '#475569' }}>|</Typography>
                  <Link href="http://t.me/EnOt15P" target="_blank" rel="noopener" underline="none" sx={{ color: '#94a3b8', fontSize: { xs: '0.625rem', sm: '0.75rem' }, '&:hover': { color: '#e2e8f0' } }}>Telegram</Link>
                </Box>
              </Box>
              <Box
                component="img"
                src="assets/images/author-avatar.webp"
                alt="EnOt15P"
                sx={{ width: { xs: 40, sm: 80 }, height: { xs: 40, sm: 80 }, borderRadius: '50%', objectFit: 'cover', border: '2px solid', borderColor: '#475569', flexShrink: 0 }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="caption" sx={{ color: '#64748b', fontSize: { xs: '0.625rem', sm: '0.6875rem' } }}>
                {t.last_update}: {lastUpdate}
              </Typography>
              <Chip
                label="RU"
                size="small"
                onClick={() => setLang('ru')}
                variant={lang === 'ru' ? 'filled' : 'outlined'}
                sx={{
                  height: 22,
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  bgcolor: lang === 'ru' ? 'rgba(20,184,166,0.15)' : 'transparent',
                  color: lang === 'ru' ? '#2dd4bf' : '#94a3b8',
                  borderColor: 'rgba(148,163,184,0.3)',
                  '&:hover': { color: '#e2e8f0' },
                }}
              />
              <Chip
                label="EN"
                size="small"
                onClick={() => setLang('en')}
                variant={lang === 'en' ? 'filled' : 'outlined'}
                sx={{
                  height: 22,
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  bgcolor: lang === 'en' ? 'rgba(20,184,166,0.15)' : 'transparent',
                  color: lang === 'en' ? '#2dd4bf' : '#94a3b8',
                  borderColor: 'rgba(148,163,184,0.3)',
                  '&:hover': { color: '#e2e8f0' },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr 1fr' }, gap: 1.5 }}>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Box
              component="a"
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: 'rgba(30,41,59,0.6)',
                border: '1px solid',
                borderColor: 'rgba(148,163,184,0.12)',
                borderRadius: 2,
                px: 2,
                py: 1.5,
                textDecoration: 'none',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: `${link.color}80`,
                  bgcolor: `${link.color}08`,
                },
              }}
            >
              <Icon sx={{ color: link.color, fontSize: 20, flexShrink: 0 }} />
              <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.75rem', 'a:hover &': { color: '#cbd5e1' } }}>
                {t[link.labelKey]}
              </Typography>
            </Box>
          );
        })}
        <Box
          component="button"
          onClick={onOpenPlus}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: 'rgba(30,41,59,0.6)',
            border: '1px solid',
            borderColor: 'rgba(148,163,184,0.12)',
            borderRadius: 2,
            px: 2,
            py: 1.5,
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
              borderColor: 'rgba(249,115,22,0.3)',
              bgcolor: 'rgba(249,115,22,0.05)',
            },
          }}
        >
          <WorkspacePremiumIcon sx={{ color: '#fb923c', fontSize: 20, flexShrink: 0 }} />
          <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.75rem' }}>
            {t.buy_plus}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
