module.exports = {
  id: 'square-space',
  labels: {
    name: 'square-space',
    description: 'Connect Lucky Orange to square-space'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/square-space/square-space-logo.png'
  },
  authentication: {
    type: 'appStore',
    appStoreUrl: 'https://help-preview.luckyorange.com/article/303-how-to-install-in-squarespace'
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
