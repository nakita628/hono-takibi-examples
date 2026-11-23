import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const sendCodeHandler = app.openapi(postSendCodeRoute, (c) => {
  throw new Error('Not implemented')
})
