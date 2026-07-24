import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useI18n } from '../i18n';

export default function SearchBar({ value, onChange }) {
  const { t } = useI18n();
  return (
    <TextField
      fullWidth
      size="small"
      placeholder={t.search_placeholder}
      aria-label={t.search_placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#64748b', fontSize: 16 }} />
            </InputAdornment>
          ),
          endAdornment: value ? (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => onChange('')} sx={{ color: '#64748b', p: 0.25 }}>
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </InputAdornment>
          ) : null,
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          bgcolor: 'rgba(30,41,59,0.8)',
          borderRadius: 2,
          fontSize: '0.8125rem',
          '& fieldset': { borderColor: 'rgba(148,163,184,0.2)' },
          '&:hover fieldset': { borderColor: 'rgba(148,163,184,0.3)' },
          '&.Mui-focused fieldset': { borderColor: 'rgba(20,184,166,0.4)' },
        },
        '& .MuiOutlinedInput-input': { color: '#f1f5f9', fontSize: '0.8125rem', py: '7px !important' },
      }}
    />
  );
}
