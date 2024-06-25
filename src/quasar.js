import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

export function useQuasar(app) {
  app.use(Quasar, {
    plugins: {},
  });
}
