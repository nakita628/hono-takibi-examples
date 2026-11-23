import { OpenAPIHono } from '@hono/zod-openapi'
import { postEditMessageCaptionRoute } from '../routes'

const app = new OpenAPIHono()

export const editMessageCaptionHandler = app.openapi(postEditMessageCaptionRoute, (c) => {
  throw new Error('Not implemented')
})
