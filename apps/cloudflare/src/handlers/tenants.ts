import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantsTenantIdAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const tenantsHandler = app.openapi(getTenantsTenantIdAccountsRoute, (c) => {
  throw new Error('Not implemented')
})
