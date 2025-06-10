module.exports = {
  id: 'wix',
  labels: {
    name: 'wix',
    description: 'Connect Lucky Orange to wix'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/wix/wix-logo.png'
  },
  authentication: {
    type: 'appStore',
    appStoreUrl: 'https://help-preview.luckyorange.com/article/299-how-to-install-in-wix'
  },
  settings (s) {
    return s.object()
      .keys({
        v1: s.object()
          .keys({
          })
      })
  }
}
