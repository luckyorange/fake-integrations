module.exports = {
  id: 'webflow',
  labels: {
    name: 'webflow',
    description: 'Connect Lucky Orange to webflow'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/webflow/webflow-logo.png'
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
