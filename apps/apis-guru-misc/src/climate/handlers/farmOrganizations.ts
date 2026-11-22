import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const farmOrganizationsHandler = app.openapi(
  getV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
