import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Box, Typography } from '@mui/material';
import { useI18n } from '../i18n';

const categoryStyles = {
  official: { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: 'rgba(59,130,246,0.2)' },
  port: { bg: 'rgba(168,85,247,0.15)', color: '#a78bfa', border: 'rgba(168,85,247,0.2)' },
  legacy: { bg: 'rgba(100,116,139,0.15)', color: '#94a3b8', border: 'rgba(100,116,139,0.2)' },
};

export default function DeviceCard({ device, freeRom, plusRom, onClick }) {
  const { t } = useI18n();
  const cat = categoryStyles[device.category] || categoryStyles.port;
  const catLabel = device.category === 'official' ? t.off_short : t.port_short;

  const fv = freeRom?.version;
  const pv = plusRom?.version;
  const same = fv && pv && fv === pv;

  return (
    <Card
      sx={{
        bgcolor: 'rgba(30,41,59,0.6)',
        border: '1px solid',
        borderColor: 'rgba(148,163,184,0.15)',
        borderRadius: 3,
        overflow: 'hidden',
      }}
    >
      <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
        <Box sx={{ position: 'relative', aspectRatio: '1' }}>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            }}
          />
          <CardMedia
            component="img"
            image={`assets/images/devices/${device.id}.webp`}
            alt={device.name}
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pt: 1,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          />
          <Box sx={{ position: 'absolute', top: 8, left: 8, display: 'flex', gap: 0.5, zIndex: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontSize: '0.625rem',
                fontWeight: 500,
                px: 0.75,
                py: 0.25,
                borderRadius: 1,
                border: '1px solid',
                bgcolor: cat.bg,
                color: cat.color,
                borderColor: cat.border,
                backdropFilter: 'blur(4px)',
              }}
            >
              {catLabel}
            </Typography>
          </Box>
          <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 0.5, zIndex: 1 }}>
            {freeRom && (
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  bgcolor: 'rgba(20,184,166,0.15)',
                  color: '#2dd4bf',
                  border: '1px solid',
                  borderColor: 'rgba(20,184,166,0.2)',
                  px: 0.75,
                  py: 0.25,
                  borderRadius: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.25,
                }}
              >
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#2dd4bf' }} />
                Free
              </Typography>
            )}
            {plusRom && (
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  bgcolor: 'rgba(249,115,22,0.15)',
                  border: '1px solid',
                  borderColor: 'rgba(249,115,22,0.2)',
                  px: 0.75,
                  py: 0.25,
                  borderRadius: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.25,
                }}
              >
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#fb923c' }} />
                <Box sx={{ background: 'linear-gradient(90deg, #ef4444, #f97316, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Plus
                </Box>
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(2,6,23,0.9), rgba(2,6,23,0.5), transparent)',
              p: 1.5,
              pt: 4,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: '#f1f5f9',
                fontWeight: 600,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                lineHeight: 1.2,
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
                  fontSize: { xs: '0.625rem', sm: '0.6875rem' },
                  fontFamily: 'monospace',
                  mt: 0.25,
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
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
