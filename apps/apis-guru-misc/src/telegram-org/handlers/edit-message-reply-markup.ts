import { OpenAPIHono } from '@hono/zod-openapi'
import { postEditMessageReplyMarkupRoute } from '../routes'

const app = new OpenAPIHono()

export const editMessageReplyMarkupHandler = app.openapi(postEditMessageReplyMarkupRoute, (c) => {
  throw new Error('Not implemented')
})
