import { OpenAPIHono } from '@hono/zod-openapi'
import { postSmsRoute } from '../routes'

const app = new OpenAPIHono()

export const smsConversionHandler = app.openapi(postSmsRoute, (c) => {
  throw new Error('Not implemented')
})
