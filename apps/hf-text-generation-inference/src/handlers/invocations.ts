import { OpenAPIHono } from '@hono/zod-openapi'
import { postInvocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const invocationsHandler = app.openapi(postInvocationsRoute, (c) => {
  throw new Error('Not implemented')
})
