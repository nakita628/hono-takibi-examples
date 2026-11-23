import { OpenAPIHono } from '@hono/zod-openapi'
import { getSmsRoute } from '../routes'

const app = new OpenAPIHono()

export const smsHandler = app.openapi(getSmsRoute, (c) => {
  throw new Error('Not implemented')
})
