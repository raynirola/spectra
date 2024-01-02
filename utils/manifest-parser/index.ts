type Manifest = chrome.runtime.ManifestV3;

class ManifestParser {
  static convertManifestToString(manifest: Manifest): string {
    if (process.env.__FIREFOX__) {
      manifest = ManifestParser.convertToFirefox(manifest);
    }
    return JSON.stringify(manifest, null, 2);
  }

  static convertToFirefox(manifest: Manifest) {
    const clone = structuredClone(manifest) as { [key: string]: unknown };

    /**
     * Override background script
     */
    clone.background = {
      scripts: [manifest.background?.service_worker],
      type: 'module',
    };

    /**
     * Override options_ui
     */
    clone.options_ui = {
      page: manifest.options_page,
      browser_style: false,
    };

    /**
     * Override content_security_policy
     */
    clone.content_security_policy = {
      extension_pages: "script-src 'self'; object-src 'self'",
    };

    delete clone.options_page;

    return clone as Manifest;
  }
}

export default ManifestParser;
