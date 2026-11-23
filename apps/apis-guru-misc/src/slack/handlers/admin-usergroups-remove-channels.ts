import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminUsergroupsRemoveChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminUsergroupsRemoveChannelsHandler = app.openapi(
  postAdminUsergroupsRemoveChannelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
