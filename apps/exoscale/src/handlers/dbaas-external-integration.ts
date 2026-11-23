import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasExternalIntegrationIntegrationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalIntegrationHandler = app.openapi(
  getDbaasExternalIntegrationIntegrationIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
