import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupSettingsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const groupSettingsHandler = app.openapi(getGroupSettingsCountRoute, (c) => {
  throw new Error('Not implemented')
})
