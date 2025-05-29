module.exports = {
  id: 'click-funnels',
  labels: {
    name: 'click-funnels',
    description: 'Connect Lucky Orange to click-funnels'
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
