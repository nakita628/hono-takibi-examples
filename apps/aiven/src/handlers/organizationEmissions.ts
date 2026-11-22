import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationOrganizationIdEmissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationEmissionsHandler = app.openapi(
  getOrganizationOrganizationIdEmissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
