import { OpenAPIHono } from '@hono/zod-openapi'
import { postStopMessageLiveLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const stopMessageLiveLocationHandler = app.openapi(postStopMessageLiveLocationRoute, (c) => {
  throw new Error('Not implemented')
})
