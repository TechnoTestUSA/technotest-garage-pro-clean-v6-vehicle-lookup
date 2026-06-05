'use client';

import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import type { AppData, AppState, Locale, Region, Screen, Vehicle } from '@/types';

const STORAGE_KEY = 'technotest-garage-pro-v3';

const emptyData: AppData = {
  profile: {
    name: '',
    familyName: '',
    phone: '',
    email: '',
    locale: 'he',
    region: 'usa',
  },
  vehicles: [],
  ledger: [],
  documents: [],
  demoMode: false,
  onboardingDone: false,
};

const demoData: AppData = {
  profile: {
    name: 'גיא',
    familyName: 'כהן',
    phone: '+1 305 555 0191',
    email: 'demo@technotestusa.com',
    locale: 'he',
    region: 'usa',
  },
  demoMode: true,
  onboardingDone: true,
  vehicles: [
    { id: 'v1', nickname: 'טויוטה קאמרי', make: 'Toyota', model: 'Camry', year: '2019', plate: '123-45-678', odometer: '84200', status: 'soon', nextTestDate: '2026-08-15', insuranceDate: '2026-10-10' },
    { id: 'v2', nickname: 'הונדה ג׳אז', make: 'Honda', model: 'Jazz', year: '2021', plate: '987-65-432', odometer: '32500', status: 'ok', nextTestDate: '2027-02-01', insuranceDate: '2026-11-20' },
    { id: 'v3', nickname: 'קיה ספורטג׳', make: 'Kia', model: 'Sportage', year: '2020', plate: '555-12-999', odometer: '57800', status: 'urgent', nextTestDate: '2026-06-18', insuranceDate: '2026-07-01' },
    { id: 'v4', nickname: 'מאזדה 3', make: 'Mazda', model: '3', year: '2022', plate: '321-77-845', odometer: '21400', status: 'ok', nextTestDate: '2027-01-21', insuranceDate: '2026-12-30' },
  ],
  ledger: [
    { id: 'e1', vehicleId: 'v1', type: 'fuel', title: 'Fuel at Shell', amount: 62.5, date: '2026-05-28' },
    { id: 'e2', vehicleId: 'v1', type: 'service', title: 'Oil service', amount: 189, date: '2026-05-17' },
    { id: 'e3', vehicleId: 'v3', type: 'repair', title: 'Brake inspection', amount: 420, date: '2026-05-02' },
  ],
  documents: [
    { id: 'd1', vehicleId: 'v1', title: 'Insurance policy', expiresAt: '2026-10-10' },
    { id: 'd2', vehicleId: 'v2', title: 'Registration', expiresAt: '2027-02-01' },
    { id: 'd3', vehicleId: 'v3', title: 'Repair invoice', expiresAt: '2026-12-31' },
  ],
};

interface AppContextValue {
  state: AppState;
  navigate: (screen: Screen) => void;
  setLocale: (locale: Locale) => void;
  setRegion: (region: Region) => void;
  startDemo: () => void;
  startEmpty: () => void;
  selectVehicle: (id: string) => void;
  addVehicle: (vehicle: Omit<Vehicle, 'id' | 'status'>) => void;
  updateProfile: (patch: Partial<AppData['profile']>) => void;
  resetApp: () => void;
}

const AppStateContext = createContext<AppContextValue | null>(null);

function loadState(): AppState {
  if (typeof window === 'undefined') return { screen: 'welcome', data: emptyData };
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as AppState;
  } catch {
    // ignore corrupted browser storage
  }
  return { screen: 'welcome', data: emptyData };
}

export function AppStateProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AppState>(() => loadState());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<AppContextValue>(() => ({
    state,
    navigate: (screen) => setState((current) => ({ ...current, screen })),
    setLocale: (locale) => setState((current) => ({ ...current, data: { ...current.data, profile: { ...current.data.profile, locale } } })),
    setRegion: (region) => setState((current) => ({ ...current, data: { ...current.data, profile: { ...current.data.profile, region } } })),
    startDemo: () => setState({ screen: 'demo', selectedVehicleId: 'v1', data: demoData }),
    startEmpty: () => setState((current) => ({ screen: 'addVehicle', data: { ...emptyData, profile: { ...emptyData.profile, locale: current.data.profile.locale, region: current.data.profile.region }, onboardingDone: true } })),
    selectVehicle: (id) => setState((current) => ({ ...current, selectedVehicleId: id, screen: 'vehicleDetail' })),
    addVehicle: (vehicle) => setState((current) => {
      const newVehicle: Vehicle = { id: `v-${Date.now()}`, status: 'ok', ...vehicle };
      return { ...current, selectedVehicleId: newVehicle.id, screen: 'vehicles', data: { ...current.data, vehicles: [...current.data.vehicles, newVehicle] } };
    }),
    updateProfile: (patch) => setState((current) => ({ ...current, data: { ...current.data, profile: { ...current.data.profile, ...patch } } })),
    resetApp: () => setState({ screen: 'welcome', data: emptyData }),
  }), [state]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) throw new Error('useAppState must be used inside AppStateProvider');
  return context;
}
