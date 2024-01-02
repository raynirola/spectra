import logo from '@assets/img/logo.svg';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

const SidePanel = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <div className="h-screen w-full flex items-center justify-center flex-col p-4 bg-gray-200 dark:bg-gray-800">
        <header className="text-center text-gray-700 dark:text-gray-200">
          <img src={logo} className="w-20 h-20 mx-auto" alt="logo" />
          <p className="mb-4">
            Edit <code>src/pages/sidepanel/SidePanel.tsx</code> and save to reload.
          </p>
          <p>Current Theme: {theme}</p>

          <button
            className="mt-4 px-4 py-2 rounded-md bg-white block mx-auto text-gray-700 dark:text-gray-200 dark:bg-black"
            onClick={exampleThemeStorage.toggle}>
            Toggle theme
          </button>
        </header>
      </div>
    </main>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
