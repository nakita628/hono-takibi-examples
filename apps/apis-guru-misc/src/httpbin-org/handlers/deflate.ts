import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeflateRoute } from '../routes'

const app = new OpenAPIHono()

export const deflateHandler = app.openapi(getDeflateRoute, (c) => {
  throw new Error('Not implemented')
})
