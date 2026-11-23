import { OpenAPIHono } from '@hono/zod-openapi'
import { postEditMessageLiveLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const editMessageLiveLocationHandler = app.openapi(postEditMessageLiveLocationRoute, (c) => {
  throw new Error('Not implemented')
})
