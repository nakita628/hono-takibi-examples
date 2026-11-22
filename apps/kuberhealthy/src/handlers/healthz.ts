import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthzRoute } from '../routes'

const app = new OpenAPIHono()

export const healthzHandler = app.openapi(getHealthzRoute, (c) => {
  throw new Error('Not implemented')
})
