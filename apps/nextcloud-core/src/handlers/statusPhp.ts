import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatusPhpRoute } from '../routes'

const app = new OpenAPIHono()

export const statusPhpHandler = app.openapi(getStatusPhpRoute, (c) => {
  throw new Error('Not implemented')
})
