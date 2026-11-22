import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceIntegrationsRoute, putServiceIntegrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceIntegrationsHandler = app
  .openapi(getServiceIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServiceIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
