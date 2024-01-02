import { createRoot } from 'react-dom/client';
import SidePanel from '@pages/sidepanel/SidePanel';
import { attachTwindStyle } from '@src/shared/style/twind';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('pages/sidepanel');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) throw new Error('Can not find #app-container');

  attachTwindStyle(appContainer, document);
  createRoot(appContainer).render(<SidePanel />);
}

init();
