import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3OrganizationsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app.openapi(getV3OrganizationsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
