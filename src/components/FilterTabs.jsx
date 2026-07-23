import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box, Chip } from '@mui/material';
import { useI18n } from '../i18n';

const filters = [
  { value: 'all', color: null },
  { value: 'official', color: '#60a5fa' },
  { value: 'port', color: '#a78bfa' },
];

export default function FilterTabs({ value, onChange }) {
  const { t } = useI18n();

  const labels = {
    all: t.all,
    official: t.official_plural,
    port: t.ports,
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(_, v) => v && onChange(v)}
      size="small"
      sx={{
        '& .MuiToggleButton-root': {
          textTransform: 'none',
          border: '1px solid',
          borderColor: 'rgba(148,163,184,0.2)',
          borderRadius: '12px !important',
          px: 1.5,
          py: 0.75,
          fontSize: '0.75rem',
          fontWeight: 500,
          color: '#94a3b8',
          bgcolor: 'transparent',
          '&.Mui-selected': {
            bgcolor: 'rgba(20,184,166,0.1)',
            color: '#2dd4bf',
            borderColor: 'rgba(20,184,166,0.3)',
            '&:hover': { bgcolor: 'rgba(20,184,166,0.15)' },
          },
          '&:hover': { color: '#e2e8f0' },
        },
      }}
    >
      {filters.map((f) => (
        <ToggleButton key={f.value} value={f.value}>
          {f.color && <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: f.color, mr: 0.75 }} />}
          {labels[f.value]}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
