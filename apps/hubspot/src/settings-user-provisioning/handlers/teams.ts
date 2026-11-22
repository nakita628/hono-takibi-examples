import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsUsers202609TeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app.openapi(getSettingsUsers202609TeamsRoute, (c) => {
  throw new Error('Not implemented')
})
