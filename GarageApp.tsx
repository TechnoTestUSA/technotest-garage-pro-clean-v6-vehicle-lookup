import GarageApp from '@/components/GarageApp';
import { AppStateProvider } from '@/state/AppState';

export default function Page() {
  return (
    <AppStateProvider>
      <GarageApp />
    </AppStateProvider>
  );
}
