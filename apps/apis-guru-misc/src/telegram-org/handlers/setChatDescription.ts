import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetChatDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const setChatDescriptionHandler = app.openapi(postSetChatDescriptionRoute, (c) => {
  throw new Error('Not implemented')
})
