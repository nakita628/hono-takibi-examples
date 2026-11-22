import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthyRoute } from '../routes'

const app = new OpenAPIHono()

export const healthyHandler = app.openapi(getHealthyRoute, (c) => {
  throw new Error('Not implemented')
})
