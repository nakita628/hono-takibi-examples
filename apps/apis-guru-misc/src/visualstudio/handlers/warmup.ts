import { OpenAPIHono } from '@hono/zod-openapi'
import { getWarmupRoute } from '../routes'

const app = new OpenAPIHono()

export const warmupHandler = app.openapi(getWarmupRoute, (c) => {
  throw new Error('Not implemented')
})
