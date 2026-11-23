import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsValkeyRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsValkeyHandler = app.openapi(getDbaasSettingsValkeyRoute, (c) => {
  throw new Error('Not implemented')
})
