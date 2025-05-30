module.exports = {
  id: 'wix',
  labels: {
    name: 'wix',
    description: 'Connect Lucky Orange to wix'
  },
  images: {
    icon: ''
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
