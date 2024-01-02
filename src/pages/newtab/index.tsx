import Newtab from '@pages/newtab/Newtab';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/newtab');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) throw new Error('Can not find #app-container');

  createRoot(appContainer).render(<Newtab />);
}

init();
