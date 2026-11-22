import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsByAppIdHandler = app.openapi(
  getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
