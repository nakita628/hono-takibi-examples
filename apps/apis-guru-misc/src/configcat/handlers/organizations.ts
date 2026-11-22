import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrganizationsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app.openapi(getV1OrganizationsRoute, (c) => {
  throw new Error('Not implemented')
})
