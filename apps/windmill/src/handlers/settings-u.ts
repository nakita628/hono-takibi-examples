import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsURuffConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsUHandler = app.openapi(getSettingsURuffConfigRoute, (c) => {
  throw new Error('Not implemented')
})
