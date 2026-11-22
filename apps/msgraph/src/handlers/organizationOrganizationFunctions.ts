import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationOrganizationFunctionsHandler = app.openapi(
  getOrganizationDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
