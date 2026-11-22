import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionMaintenancePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const maintenancePoliciesHandler = app.openapi(
  getApiVersionMaintenancePoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
