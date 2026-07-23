import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { useI18n } from '../i18n';
import DeviceCard from './DeviceCard';

export default function DeviceGrid({ devices, deviceRomsMap, romsById, onSelect }) {
  const { t } = useI18n();

  if (devices.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8, minHeight: 200 }}>
        <SearchOffIcon sx={{ fontSize: 48, color: '#475569', mb: 2 }} />
        <Typography variant="body2" sx={{ color: '#64748b' }}>{t.no_devices}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        },
        gap: 2,
      }}
    >
      {devices.map((device) => (
        <DeviceCard
          key={device.id}
          device={device}
          freeRom={deviceRomsMap[device.id]?.free_rom_id ? romsById[deviceRomsMap[device.id].free_rom_id] : null}
          plusRom={deviceRomsMap[device.id]?.plus_rom_id ? romsById[deviceRomsMap[device.id].plus_rom_id] : null}
          onClick={() => onSelect(device)}
        />
      ))}
    </Box>
  );
}
