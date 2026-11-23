import { OpenAPIHono } from '@hono/zod-openapi'
import { getChatGetPermalinkRoute } from '../routes'

const app = new OpenAPIHono()

export const chatGetPermalinkHandler = app.openapi(getChatGetPermalinkRoute, (c) => {
  throw new Error('Not implemented')
})
