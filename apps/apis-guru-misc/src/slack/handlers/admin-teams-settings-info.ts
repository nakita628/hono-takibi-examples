import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTeamsSettingsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsSettingsInfoHandler = app.openapi(getAdminTeamsSettingsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
