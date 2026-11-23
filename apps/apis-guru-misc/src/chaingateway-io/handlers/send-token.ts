import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const sendTokenHandler = app.openapi(postSendTokenRoute, (c) => {
  throw new Error('Not implemented')
})
