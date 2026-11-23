import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminTeamsSettingsSetIconRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsSettingsSetIconHandler = app.openapi(
  postAdminTeamsSettingsSetIconRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
