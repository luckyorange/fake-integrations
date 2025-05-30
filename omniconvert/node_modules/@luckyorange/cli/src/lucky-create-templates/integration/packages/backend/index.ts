import { router, get } from 'microrouter'

const { corsHandler, getDefaultCorsHeaders, trailingSlash } = require('@luckyorange/utilities-microservice')
const cors = corsHandler({
  allowHeaders: getDefaultCorsHeaders()
})

// Export routes
const routes = router(
  get('/_health', require('./src/actions/health'))
)

module.exports = cors(trailingSlash(routes))
