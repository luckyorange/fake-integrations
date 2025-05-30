module.exports = {
  id: 'click-funnels',
  labels: {
    name: 'click-funnels',
    description: 'Connect Lucky Orange to click-funnels'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/blogger/click-funnels-logo.png'
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
