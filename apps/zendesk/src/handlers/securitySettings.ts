import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2SecuritySettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const securitySettingsHandler = app.openapi(getApiV2SecuritySettingsRoute, (c) => {
  throw new Error('Not implemented')
})
