import { OpenAPIHono } from '@hono/zod-openapi'
import { getBytesNRoute } from '../routes'

const app = new OpenAPIHono()

export const bytesHandler = app.openapi(getBytesNRoute, (c) => {
  throw new Error('Not implemented')
})
