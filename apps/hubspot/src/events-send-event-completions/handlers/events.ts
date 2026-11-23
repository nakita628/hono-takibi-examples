import { OpenAPIHono } from '@hono/zod-openapi'
import { postEvents202609SendBatchRoute, postEvents202609SendRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postEvents202609SendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvents202609SendBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
