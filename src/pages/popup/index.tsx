import { createRoot } from 'react-dom/client';
import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { attachTwindStyle } from '@src/shared/style/twind';

refreshOnUpdate('pages/popup');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) throw new Error('Can not find #app-container');

  attachTwindStyle(appContainer, document);
  createRoot(appContainer).render(<Popup />);
}

init();
