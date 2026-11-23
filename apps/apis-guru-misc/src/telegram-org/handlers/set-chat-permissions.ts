import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetChatPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const setChatPermissionsHandler = app.openapi(postSetChatPermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
