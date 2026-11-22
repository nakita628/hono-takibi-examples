import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const sendLocationHandler = app.openapi(postSendLocationRoute, (c) => {
  throw new Error('Not implemented')
})
