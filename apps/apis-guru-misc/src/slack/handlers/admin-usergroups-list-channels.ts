import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminUsergroupsListChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsergroupsListChannelsHandler = app.openapi(
  getAdminUsergroupsListChannelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
