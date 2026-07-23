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
        bgcolor: 'rgba(30,41,59,0.6)',
        border: '1px solid',
        borderColor: 'rgba(148,163,184,0.15)',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea onClick={onClick} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{ position: 'relative', bgcolor: '#0f172a', height: 180 }}>
          <CardMedia
            component="img"
            image={`assets/images/devices/${device.id}.webp`}
            alt={device.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              p: 1.5,
              transition: 'transform 0.3s ease',
            }}
          />
        </Box>
        <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 }, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
            {brand && (
              <Chip
                label={brand}
                size="small"
                sx={{
                  height: 18,
                  fontSize: '0.6rem',
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
                height: 18,
                fontSize: '0.6rem',
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
                  height: 18,
                  fontSize: '0.6rem',
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
                  height: 18,
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  bgcolor: 'rgba(249,115,22,0.15)',
                  border: '1px solid',
                  borderColor: 'rgba(249,115,22,0.2)',
                  color: '#fb923c',
                  '& .MuiChip-label': { px: 0.75 },
                }}
              />
            )}
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#f1f5f9',
              fontWeight: 600,
              fontSize: '0.8125rem',
              lineHeight: 1.3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {device.name}
          </Typography>
          {(fv || pv) && (
            <Typography
              variant="caption"
              sx={{
                fontSize: '0.6875rem',
                fontFamily: 'monospace',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {same ? (
                <Box
                  component="span"
                  sx={{ background: 'linear-gradient(90deg, #2dd4bf, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {fv}
                </Box>
              ) : (
                <>
                  {fv && <Box component="span" sx={{ color: 'rgba(45,212,191,0.8)' }}>{fv}</Box>}
                  {fv && pv && <Box component="span" sx={{ color: '#475569', mx: 0.5 }}>|</Box>}
                  {pv && <Box component="span" sx={{ color: 'rgba(251,146,60,0.8)' }}>{pv}</Box>}
                </>
              )}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
