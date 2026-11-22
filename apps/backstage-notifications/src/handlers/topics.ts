import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopicsRoute } from '../routes'

const app = new OpenAPIHono()

export const topicsHandler = app.openapi(getTopicsRoute, (c) => {
  throw new Error('Not implemented')
})
