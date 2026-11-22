import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTenantRoute, patchTenantActivateRoute } from '../routes'

const app = new OpenAPIHono()

export const tenantHandler = app
  .openapi(deleteTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
