import { IntegrationCore } from '@luckyorange/integration-core'

const core = new IntegrationCore([
  {
    name: 'php-bb',
    isActive () {
      return true
    },
    start () {
    }
  }
])

declare global {
  interface Window { LOQ: any[]; }
}

window.parent.LOQ = window.parent.LOQ || []
window.parent.LOQ.push(['ready', (LO: any) => {
  core.init()
}])
