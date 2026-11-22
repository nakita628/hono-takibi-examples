import { OpenAPIHono } from '@hono/zod-openapi'
import { getActiveViolationsRoute } from '../routes'

const app = new OpenAPIHono()

export const activeViolationsHandler = app.openapi(getActiveViolationsRoute, (c) => {
  throw new Error('Not implemented')
})
