import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasExternalIntegrationsServiceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalIntegrationsHandler = app.openapi(
  getDbaasExternalIntegrationsServiceNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
