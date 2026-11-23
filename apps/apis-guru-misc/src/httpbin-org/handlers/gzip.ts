import { OpenAPIHono } from '@hono/zod-openapi'
import { getGzipRoute } from '../routes'

const app = new OpenAPIHono()

export const gzipHandler = app.openapi(getGzipRoute, (c) => {
  throw new Error('Not implemented')
})
