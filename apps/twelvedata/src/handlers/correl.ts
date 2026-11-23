import { OpenAPIHono } from '@hono/zod-openapi'
import { getCorrelRoute } from '../routes'

const app = new OpenAPIHono()

export const correlHandler = app.openapi(getCorrelRoute, (c) => {
  throw new Error('Not implemented')
})
