import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendContactRoute } from '../routes'

const app = new OpenAPIHono()

export const sendContactHandler = app.openapi(postSendContactRoute, (c) => {
  throw new Error('Not implemented')
})
