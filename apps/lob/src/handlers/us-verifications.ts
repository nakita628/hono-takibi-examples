import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsVerificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const usVerificationsHandler = app.openapi(postUsVerificationsRoute, (c) => {
  throw new Error('Not implemented')
})
