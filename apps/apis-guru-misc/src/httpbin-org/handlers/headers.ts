import { OpenAPIHono } from '@hono/zod-openapi'
import { getHeadersRoute } from '../routes'

const app = new OpenAPIHono()

export const headersHandler = app.openapi(getHeadersRoute, (c) => {
  throw new Error('Not implemented')
})
