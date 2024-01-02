import { createRoot } from 'react-dom/client';
import App from '@pages/content/ui/app';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { attachTwindStyle } from '@src/shared/style/twind';

refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'chrome-extension-boilerplate-react-vite-content-view-root';
root.style.all = 'initial';

document.documentElement.append(root);
document.body.style.isolation = 'isolate';

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

attachTwindStyle(rootIntoShadow, shadowRoot);
createRoot(rootIntoShadow).render(<App />);
