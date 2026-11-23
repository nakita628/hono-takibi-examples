import { OpenAPIHono } from '@hono/zod-openapi'
import { postInboxUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const inboxHandler = app.openapi(postInboxUsernameRoute, (c) => {
  throw new Error('Not implemented')
})
