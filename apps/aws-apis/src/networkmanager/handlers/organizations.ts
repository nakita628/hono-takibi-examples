import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsServiceAccessRoute, postOrganizationsServiceAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsServiceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsServiceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
