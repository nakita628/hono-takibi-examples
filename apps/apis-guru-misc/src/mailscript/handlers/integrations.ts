import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteIntegrationsIntegrationRoute, getIntegrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationsIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
