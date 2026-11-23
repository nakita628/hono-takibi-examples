import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendMediaGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const sendMediaGroupHandler = app.openapi(postSendMediaGroupRoute, (c) => {
  throw new Error('Not implemented')
})
