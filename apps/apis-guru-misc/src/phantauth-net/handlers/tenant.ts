import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantTenantnameRoute } from '../routes'

const app = new OpenAPIHono()

export const tenantHandler = app.openapi(getTenantTenantnameRoute, (c) => {
  throw new Error('Not implemented')
})
