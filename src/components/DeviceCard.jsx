import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Box, Typography, Chip } from '@mui/material';
import { useI18n } from '../i18n';

const categoryStyles = {
  official: { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: 'rgba(59,130,246,0.2)' },
  port: { bg: 'rgba(168,85,247,0.15)', color: '#a78bfa', border: 'rgba(168,85,247,0.2)' },
  legacy: { bg: 'rgba(100,116,139,0.15)', color: '#94a3b8', border: 'rgba(100,116,139,0.2)' },
};

const brandStyles = {
  POCO: { bg: 'rgba(234,179,8,0.12)', color: '#facc15', border: 'rgba(234,179,8,0.2)' },
  Xiaomi: { bg: 'rgba(249,115,22,0.12)', color: '#fb923c', border: 'rgba(249,115,22,0.2)' },
  Redmi: { bg: 'rgba(239,68,68,0.12)', color: '#f87171', border: 'rgba(239,68,68,0.2)' },
};

function detectBrand(device) {
  const id = (device.id || '').toLowerCase();
  const name = (device.name || '').toLowerCase();
  if (id.startsWith('poco') || name.startsWith('poco')) return 'POCO';
  if (id.startsWith('redmi') || name.startsWith('redmi')) return 'Redmi';
  if (id.startsWith('xiaomi') || id.startsWith('mi_') || name.startsWith('xiaomi') || name.startsWith('mi ')) return 'Xiaomi';
  return null;
}

export default function DeviceCard({ device, freeRom, plusRom, onClick }) {
  const { t } = useI18n();
  const cat = categoryStyles[device.category] || categoryStyles.port;
  const catLabel = device.category === 'official' ? t.off_short : t.port_short;
  const brand = detectBrand(device);
  const brandStyle = brand ? brandStyles[brand] : null;

  const fv = freeRom?.version;
  const pv = plusRom?.version;
  const same = fv && pv && fv === pv;

  return (
    <Card
      sx={{
        bgcolor: '#1e293b',
        border: '1px solid',
        borderColor: 'rgba(148,163,184,0.12)',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
        '&:hover': {
          borderColor: 'rgba(148,163,184,0.3)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{ position: 'relative', bgcolor: '#0f172a', height: 220 }}>
          <CardMedia
            component="img"
            image={`assets/images/devices/${device.id}.webp`}
            alt={device.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              p: 2,
            }}
          />
        </Box>
        <CardContent sx={{ p: 1.75, '&:last-child': { pb: 1.75 }, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#f1f5f9',
              fontWeight: 600,
              fontSize: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            {device.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
            {brand && (
              <Chip
                label={brand}
                size="small"
                sx={{
                  height: 20,
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  bgcolor: brandStyle.bg,
                  color: brandStyle.color,
                  border: '1px solid',
                  borderColor: brandStyle.border,
                  '& .MuiChip-label': { px: 0.75 },
                }}
              />
            )}
            <Chip
              label={catLabel}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.65rem',
                fontWeight: 500,
                bgcolor: cat.bg,
                color: cat.color,
                border: '1px solid',
                borderColor: cat.border,
                '& .MuiChip-label': { px: 0.75 },
              }}
            />
            {freeRom && (
              <Chip
                label="Free"
                size="small"
                sx={{
                  height: 20,
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  bgcolor: 'rgba(20,184,166,0.15)',
                  color: '#2dd4bf',
                  border: '1px solid',
                  borderColor: 'rgba(20,184,166,0.2)',
                  '& .MuiChip-label': { px: 0.75 },
                }}
              />
            )}
            {plusRom && (
              <Chip
                label="Plus"
                size="small"
                sx={{
                  height: 20,
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  bgcolor: 'rgba(249,115,22,0.15)',
                  color: '#fb923c',
                  border: '1px solid',
                  borderColor: 'rgba(249,115,22,0.2)',
                  '& .MuiChip-label': { px: 0.75 },
                }}
              />
            )}
          </Box>

          {(fv || pv) && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              {fv && (
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>
                  Free: {fv}
                </Typography>
              )}
              {pv && fv && pv !== fv && (
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>
                  Plus: {pv}
                </Typography>
              )}
              {pv && !fv && (
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>
                  Plus: {pv}
                </Typography>
              )}
              {same && (
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>
                  {fv}
                </Typography>
              )}
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
