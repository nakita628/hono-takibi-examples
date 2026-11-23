import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const getAccountSettingsHandler = app.openapi(postGetAccountSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
