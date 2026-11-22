import { OpenAPIHono } from '@hono/zod-openapi'
import { postSmsmultiRoute, postSmsRoute } from '../routes'

const app = new OpenAPIHono()

export const smsHandler = app
  .openapi(postSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsmultiRoute, (c) => {
    throw new Error('Not implemented')
  })
