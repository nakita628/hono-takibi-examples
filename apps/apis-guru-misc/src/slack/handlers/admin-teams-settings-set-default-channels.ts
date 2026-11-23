import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminTeamsSettingsSetDefaultChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsSettingsSetDefaultChannelsHandler = app.openapi(
  postAdminTeamsSettingsSetDefaultChannelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
