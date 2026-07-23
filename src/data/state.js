import rawState from '../../state.json';

export function loadState() {
  const devices = rawState.devices || [];
  const romsList = rawState.roms || [];
  const deviceRomsMap = rawState.device_roms || {};
  const meta = rawState.meta || {};

  const romsById = {};
  for (const rom of romsList) {
    romsById[rom.id] = rom;
  }

  const sortedDevices = [...devices].sort((a, b) => {
    const da = latestDate(a.id, deviceRomsMap, romsById);
    const db = latestDate(b.id, deviceRomsMap, romsById);
    if (da > db) return -1;
    if (da < db) return 1;
    return 0;
  });

  return { devices: sortedDevices, deviceRomsMap, romsById, meta };
}

function latestDate(devId, deviceRomsMap, romsById) {
  const mapping = deviceRomsMap[devId];
  if (!mapping) return '';
  const keys = ['free_rom_id', 'plus_rom_id'];
  const dates = [];
  for (const key of keys) {
    const rid = mapping[key];
    if (rid && romsById[rid] && romsById[rid].date) {
      dates.push(romsById[rid].date);
    }
  }
  return dates.length ? dates.reduce((a, b) => (a > b ? a : b)) : '';
}

export function formatDate(raw) {
  if (!raw) return '';
  const m = String(raw).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[3]}.${m[2]}.${m[1].slice(2)}`;
  return String(raw).slice(0, 10);
}

export function formatDateLong(raw) {
  if (!raw) return '';
  const m = String(raw).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[3]}.${m[2]}.${m[1]}`;
  return String(raw).slice(0, 10);
}
