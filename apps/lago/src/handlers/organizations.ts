import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsRoute, putOrganizationsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
