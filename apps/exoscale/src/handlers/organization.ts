import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app.openapi(getOrganizationRoute, (c) => {
  throw new Error('Not implemented')
})
