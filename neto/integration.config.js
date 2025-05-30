module.exports = {
  id: 'neto',
  labels: {
    name: 'neto',
    description: 'Connect Lucky Orange to neto'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/neto/neto-logo.png'
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
