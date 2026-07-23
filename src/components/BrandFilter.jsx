import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

const brands = [
  { value: 'all', color: null },
  { value: 'POCO', color: '#facc15' },
  { value: 'Xiaomi', color: '#fb923c' },
  { value: 'Redmi', color: '#f87171' },
];

export default function BrandFilter({ value, onChange }) {
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
          py: 0.5,
          fontSize: '0.6875rem',
          fontWeight: 500,
          color: '#94a3b8',
          bgcolor: 'transparent',
          minHeight: 28,
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
      {brands.map((b) => (
        <ToggleButton key={b.value} value={b.value}>
          {b.color && <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: b.color, mr: 0.5 }} />}
          {b.value === 'all' ? 'All' : b.value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
