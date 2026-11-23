import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminTeamsSettingsSetDiscoverabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsSettingsSetDiscoverabilityHandler = app.openapi(
  postAdminTeamsSettingsSetDiscoverabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
