import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useI18n } from '../i18n';

export default function Footer() {
  const { t } = useI18n();
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        pt: 2,
        borderTop: '1px solid',
        borderColor: '#1e293b',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src="assets/images/author-avatar.webp"
            alt="EnOt15P"
            sx={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '1px solid', borderColor: '#334155' }}
          />
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            {t.author}{' '}
            <Link
              href="http://t.me/EnOt15P"
              target="_blank"
              rel="noopener"
              underline="none"
              sx={{ color: '#cbd5e1', fontWeight: 500, '&:hover': { color: '#2dd4bf' } }}
            >
              EnOt15P
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link href="http://t.me/EnOt15P" target="_blank" rel="noopener" underline="none" sx={{ color: '#475569', fontSize: '0.75rem', '&:hover': { color: '#60a5fa' } }}>
            Telegram
          </Link>
          <Link href="http://4pda.to/forum/index.php?showuser=9976456" target="_blank" rel="noopener" underline="none" sx={{ color: '#475569', fontSize: '0.75rem', '&:hover': { color: '#60a5fa' } }}>
            4PDA
          </Link>
          <Typography variant="caption" sx={{ color: '#475569' }}>TURBO OS</Typography>
        </Box>
      </Box>
    </Box>
  );
}
