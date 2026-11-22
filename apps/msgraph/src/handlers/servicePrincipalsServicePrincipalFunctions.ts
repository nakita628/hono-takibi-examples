import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicePrincipalsDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsServicePrincipalFunctionsHandler = app.openapi(
  getServicePrincipalsDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
