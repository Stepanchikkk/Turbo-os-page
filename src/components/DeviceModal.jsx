import React from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useI18n } from '../i18n';
import { formatDateLong } from '../data/state';

const categoryStyles = {
  official: { bg: 'rgba(59,130,246,0.2)', color: '#60a5fa' },
  port: { bg: 'rgba(168,85,247,0.2)', color: '#a78bfa' },
  legacy: { bg: 'rgba(100,116,139,0.15)', color: '#94a3b8' },
};

export default function DeviceModal({ device, deviceRomsMap, romsById, onClose }) {
  const { t } = useI18n();

  if (!device) return null;

  const cat = categoryStyles[device.category] || categoryStyles.port;
  const freeRom = deviceRomsMap[device.id]?.free_rom_id ? romsById[deviceRomsMap[device.id].free_rom_id] : null;
  const plusRom = deviceRomsMap[device.id]?.plus_rom_id ? romsById[deviceRomsMap[device.id].plus_rom_id] : null;

  return (
    <Dialog open={Boolean(device)} onClose={onClose} maxWidth="sm" fullWidth>
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 16, right: 16, color: '#64748b', zIndex: 1 }}>
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 3, bgcolor: '#0f172a' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              flexShrink: 0,
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={`assets/images/devices/${device.id}.webp`}
              alt={device.name}
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: '#f1f5f9', fontWeight: 700 }}>{device.name}</Typography>
            <Chip
              label={device.category === 'official' ? t.official : t.port}
              size="small"
              sx={{
                mt: 0.5,
                bgcolor: cat.bg,
                color: cat.color,
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {freeRom && (
            <Box sx={{ bgcolor: 'rgba(30,41,59,0.5)', borderRadius: 2, p: 2, border: '1px solid', borderColor: 'rgba(148,163,184,0.12)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2dd4bf' }} />
                <Typography variant="body2" sx={{ color: '#2dd4bf', fontWeight: 600 }}>{t.free_version}</Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#e2e8f0', fontFamily: 'monospace', fontWeight: 500, mb: 0.5 }}>
                {freeRom.version || ''}
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 1.5 }}>
                {formatDateLong(freeRom.date || '')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {freeRom.download_link && (
                  <Button
                    component="a"
                    href={freeRom.download_link}
                    target="_blank"
                    rel="noopener"
                    variant="text"
                    size="small"
                    startIcon={<DownloadIcon />}
                    sx={{ color: '#2dd4bf', bgcolor: 'rgba(20,184,166,0.1)', '&:hover': { bgcolor: 'rgba(20,184,166,0.2)' } }}
                  >
                    {t.download}
                  </Button>
                )}
                {freeRom.changelog_link && (
                  <Button
                    component="a"
                    href={freeRom.changelog_link}
                    target="_blank"
                    rel="noopener"
                    variant="text"
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    sx={{ color: '#cbd5e1', bgcolor: 'rgba(100,116,139,0.3)', '&:hover': { bgcolor: 'rgba(100,116,139,0.5)' } }}
                  >
                    {t.changelog}
                  </Button>
                )}
              </Box>
            </Box>
          )}

          {plusRom && (
            <Box sx={{ bgcolor: 'rgba(30,41,59,0.5)', borderRadius: 2, p: 2, border: '1px solid', borderColor: 'rgba(249,115,22,0.2)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 700, background: 'linear-gradient(90deg, #ef4444, #f97316, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t.plus_version}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#e2e8f0', fontFamily: 'monospace', fontWeight: 500, mb: 0.5 }}>
                {plusRom.version || ''}
                {plusRom.plus_date ? ` ${t.plus_release} ${plusRom.plus_date}` : ''}
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 1 }}>
                {formatDateLong(plusRom.date || '')}
              </Typography>
              {plusRom.price && (
                <Typography variant="body2" sx={{ color: '#fb923c', fontWeight: 600, mb: 1 }}>
                  {t.price}: {plusRom.price} &#8381;
                  {plusRom.discount_price && plusRom.discount_condition
                    ? ` (${plusRom.discount_price} &#8381; ${t.discount_if} ${plusRom.discount_condition})`
                    : ''}
                </Typography>
              )}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {plusRom.changelog_link && (
                  <Button
                    component="a"
                    href={plusRom.changelog_link}
                    target="_blank"
                    rel="noopener"
                    variant="text"
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    sx={{ color: '#cbd5e1', bgcolor: 'rgba(100,116,139,0.3)', '&:hover': { bgcolor: 'rgba(100,116,139,0.5)' } }}
                  >
                    {t.changelog}
                  </Button>
                )}
              </Box>
            </Box>
          )}

          {!freeRom && !plusRom && (
            <Typography variant="body2" sx={{ color: '#64748b', fontStyle: 'italic', textAlign: 'center', py: 2 }}>
              {t.no_roms}
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
