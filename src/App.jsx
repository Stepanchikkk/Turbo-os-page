import React, { useState, useMemo, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { I18nProvider } from './i18n';
import { loadState } from './data/state';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterTabs from './components/FilterTabs';
import BrandFilter from './components/BrandFilter';
import DeviceGrid from './components/DeviceGrid';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import DeviceModal from './components/DeviceModal';
import PlusModal from './components/PlusModal';

const { devices, deviceRomsMap, romsById, meta } = loadState();

function AppContent() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [brand, setBrand] = useState('all');
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [plusOpen, setPlusOpen] = useState(false);

  const filteredDevices = useMemo(() => {
    return devices.filter((d) => {
      const matchCat = filter === 'all' || d.category === filter;
      const matchBrand =
        brand === 'all' ||
        (brand === 'POCO' && (d.id.startsWith('poco') || d.name.toLowerCase().startsWith('poco'))) ||
        (brand === 'Xiaomi' && (d.id.startsWith('xiaomi') || d.id.startsWith('mi_') || d.name.toLowerCase().startsWith('xiaomi') || d.name.toLowerCase().startsWith('mi '))) ||
        (brand === 'Redmi' && (d.id.startsWith('redmi') || d.name.toLowerCase().startsWith('redmi')));
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        (d.aliases || []).some((a) => a.toLowerCase().includes(q));
      return matchCat && matchBrand && matchSearch;
    });
  }, [search, filter, brand]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setSelectedDevice(null);
        setPlusOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 5 }, px: { xs: 2, sm: 3, lg: 4 } }}>
      <Header onOpenPlus={() => setPlusOpen(true)} meta={meta} />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 1.5, mb: 3, alignItems: { md: 'center' } }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', flex: 1 }}>
          <FilterTabs value={filter} onChange={setFilter} />
          <BrandFilter value={brand} onChange={setBrand} />
        </Box>
        <Box sx={{ width: { xs: '100%', md: 280 } }}>
          <SearchBar value={search} onChange={setSearch} />
        </Box>
      </Box>
      <DeviceGrid
        devices={filteredDevices}
        deviceRomsMap={deviceRomsMap}
        romsById={romsById}
        onSelect={setSelectedDevice}
      />
      <SupportSection />
      <Footer />
      <DeviceModal
        device={selectedDevice}
        deviceRomsMap={deviceRomsMap}
        romsById={romsById}
        onClose={() => setSelectedDevice(null)}
      />
      <PlusModal open={plusOpen} onClose={() => setPlusOpen(false)} />
    </Container>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
