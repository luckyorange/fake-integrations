module.exports = {
  id: 'blogger',
  labels: {
    name: 'blogger',
    description: 'Connect Lucky Orange to Blogger'
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
