import { OpenAPIHono } from '@hono/zod-openapi'
import { getAvgRoute } from '../routes'

const app = new OpenAPIHono()

export const avgHandler = app.openapi(getAvgRoute, (c) => {
  throw new Error('Not implemented')
})
