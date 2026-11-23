import { OpenAPIHono } from '@hono/zod-openapi'
import { getTsfRoute } from '../routes'

const app = new OpenAPIHono()

export const tsfHandler = app.openapi(getTsfRoute, (c) => {
  throw new Error('Not implemented')
})
