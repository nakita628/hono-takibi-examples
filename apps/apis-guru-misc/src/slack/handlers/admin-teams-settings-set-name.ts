import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminTeamsSettingsSetNameRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsSettingsSetNameHandler = app.openapi(
  postAdminTeamsSettingsSetNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
