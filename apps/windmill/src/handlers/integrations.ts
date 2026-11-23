import { OpenAPIHono } from '@hono/zod-openapi'
import { getIntegrationsHubAppMetaRoute, getIntegrationsHubListRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsHubListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsHubAppMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
