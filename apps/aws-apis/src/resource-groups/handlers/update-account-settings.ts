import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const updateAccountSettingsHandler = app.openapi(postUpdateAccountSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
