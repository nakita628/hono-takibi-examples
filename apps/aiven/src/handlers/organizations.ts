import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsRoute, postOrganizationsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
