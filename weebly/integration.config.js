module.exports = {
  id: 'weebly',
  labels: {
    name: 'weebly',
    description: 'Connect Lucky Orange to weebly'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/weebly/weebly-logo.png'
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
