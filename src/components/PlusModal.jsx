import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TelegramIcon from '@mui/icons-material/Telegram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useI18n } from '../i18n';

const benefits = [
  'benefit_early',
  'benefit_support',
  'benefit_exclusive',
];

export default function PlusModal({ open, onClose }) {
  const { t } = useI18n();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 16, right: 16, color: '#64748b', zIndex: 1 }}>
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={{ bgcolor: '#0f172a', pt: 3, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(249,115,22,0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WorkspacePremiumIcon sx={{ fontSize: 32, color: '#fb923c' }} />
          </Box>
        </Box>
        <Typography variant="h6" sx={{ color: '#f1f5f9', fontWeight: 700, background: 'linear-gradient(90deg, #ef4444, #f97316, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          {t.buy_plus_title}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ bgcolor: '#0f172a', pb: 3 }}>
        <Typography variant="body2" sx={{ color: '#94a3b8', textAlign: 'center', mb: 2 }}>
          {t.buy_plus_desc}
        </Typography>
        <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 600, mb: 1 }}>
          {t.plus_benefits}
        </Typography>
        <List dense disablePadding>
          {benefits.map((key) => (
            <ListItem key={key} disableGutters sx={{ py: 0.25 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: '#2dd4bf', fontSize: 18 }} />
              </ListItemIcon>
              <ListItemText primary={t[key]} slotProps={{ primary: { variant: 'body2', sx: { color: '#cbd5e1' } } }} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body2" sx={{ color: '#94a3b8', mt: 2, mb: 1.5, textAlign: 'center' }}>
          {t.contact_author}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            component="a"
            href="http://t.me/EnOt15P"
            target="_blank"
            rel="noopener"
            variant="contained"
            startIcon={<TelegramIcon />}
            sx={{
              bgcolor: '#1d4ed8',
              '&:hover': { bgcolor: '#1e40af' },
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            {t.contact_button}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
