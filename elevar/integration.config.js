module.exports = {
  id: 'elevar',
  labels: {
    name: 'elevar',
    description: 'Connect Lucky Orange to elevar'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/elevar/elevar-logo.png'
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
