import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicePrincipalsMicrosoftGraphDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsFunctionsHandler = app.openapi(
  getServicePrincipalsMicrosoftGraphDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
