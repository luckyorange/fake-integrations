module.exports = {
  id: 'blogger',
  labels: {
    name: 'blogger',
    description: 'Connect Lucky Orange to Blogger'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/blogger/blogger-logo-transparent.png'
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
