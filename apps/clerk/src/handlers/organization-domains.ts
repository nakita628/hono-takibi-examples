import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationDomainsHandler = app.openapi(getOrganizationDomainsRoute, (c) => {
  throw new Error('Not implemented')
})
