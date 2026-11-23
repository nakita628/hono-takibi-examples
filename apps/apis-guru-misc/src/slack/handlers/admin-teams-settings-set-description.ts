import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminTeamsSettingsSetDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsSettingsSetDescriptionHandler = app.openapi(
  postAdminTeamsSettingsSetDescriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
