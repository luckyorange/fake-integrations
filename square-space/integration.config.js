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
    type: 'none'
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
