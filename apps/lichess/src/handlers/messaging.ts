import { OpenAPIHono } from '@hono/zod-openapi'
import { postInboxUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const messagingHandler = app.openapi(postInboxUsernameRoute, (c) => {
  throw new Error('Not implemented')
})
