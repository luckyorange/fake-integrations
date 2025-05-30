module.exports = {
  id: 'segment',
  labels: {
    name: 'segment',
    description: 'Connect Lucky Orange to segment'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/segment/segment-logo.png'
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
