module.exports = {
  id: 'tealium',
  labels: {
    name: 'tealium',
    description: 'Connect Lucky Orange to tealium'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/tealium/tealium-logo.png'
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
