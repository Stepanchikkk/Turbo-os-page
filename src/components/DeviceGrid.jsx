import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
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
    <Grid container spacing={2}>
      {devices.map((device) => (
        <Grid key={device.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <DeviceCard
            device={device}
            freeRom={deviceRomsMap[device.id]?.free_rom_id ? romsById[deviceRomsMap[device.id].free_rom_id] : null}
            plusRom={deviceRomsMap[device.id]?.plus_rom_id ? romsById[deviceRomsMap[device.id].plus_rom_id] : null}
            onClick={() => onSelect(device)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
