module.exports = {
  id: 'php-bb',
  labels: {
    name: 'php-bb',
    description: 'Connect Lucky Orange to php-bb'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/php-bb/php-logo.png'
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
