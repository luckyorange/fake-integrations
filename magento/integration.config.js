module.exports = {
  id: 'magento',
  labels: {
    name: 'magento',
    description: 'Connect Lucky Orange to magento'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/magento/magento-logo.png'
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
