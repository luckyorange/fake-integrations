module.exports = {
  id: 'omniconvert',
  labels: {
    name: 'omniconvert',
    description: 'Connect Lucky Orange to omniconvert'
  },
  images: {
    icon: 'https://storage.googleapis.com/lucky-orange-public/images/integrations/omniconvert/omniconvert-logo.png'
  },
  authentication: {
    type: 'appStore',
    appStoreUrl: 'https://help.omniconvert.com/kba/omniconvert-explore-and-lucky-orange-integration/'
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
