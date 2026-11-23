import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsergroupsAddChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsergroupsAddChannelsHandler = app.openapi(
  postAdminUsergroupsAddChannelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
