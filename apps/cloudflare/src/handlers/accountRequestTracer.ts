import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdRequestTracerTraceRoute } from '../routes'

const app = new OpenAPIHono()

export const accountRequestTracerHandler = app.openapi(
  postAccountsAccountIdRequestTracerTraceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
