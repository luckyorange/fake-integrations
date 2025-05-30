module.exports = {
  id: 'unbounce',
  labels: {
    name: 'unbounce',
    description: 'Connect Lucky Orange to unbounce'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/unbounce/unbounce-logo.png'
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
