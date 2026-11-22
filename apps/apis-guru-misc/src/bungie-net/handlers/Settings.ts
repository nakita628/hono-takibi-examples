import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const SettingsHandler = app.openapi(getSettingsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
