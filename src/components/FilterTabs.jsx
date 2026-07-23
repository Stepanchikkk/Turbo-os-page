import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box, Typography } from '@mui/material';
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
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
      {filters.map((f) => (
        <Box
          key={f.value}
          component="button"
          onClick={() => onChange(f.value)}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.5,
            py: 0.75,
            borderRadius: 2,
            border: '1px solid',
            borderColor: value === f.value ? 'rgba(20,184,166,0.3)' : 'rgba(148,163,184,0.2)',
            bgcolor: value === f.value ? 'rgba(20,184,166,0.1)' : 'transparent',
            color: value === f.value ? '#2dd4bf' : '#94a3b8',
            fontSize: '0.75rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s',
            '&:hover': { color: '#e2e8f0' },
          }}
        >
          {f.color && <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: f.color }} />}
          {labels[f.value]}
        </Box>
      ))}
    </Box>
  );
}
