import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const getSettingsHandler = app.openapi(getGetSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
