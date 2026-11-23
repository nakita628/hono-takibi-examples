import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendRoute } from '../routes'

const app = new OpenAPIHono()

export const sendHandler = app.openapi(postSendRoute, (c) => {
  throw new Error('Not implemented')
})
