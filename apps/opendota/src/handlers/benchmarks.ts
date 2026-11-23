import { OpenAPIHono } from '@hono/zod-openapi'
import { getBenchmarksRoute } from '../routes'

const app = new OpenAPIHono()

export const benchmarksHandler = app.openapi(getBenchmarksRoute, (c) => {
  throw new Error('Not implemented')
})
