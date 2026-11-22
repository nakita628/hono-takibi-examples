import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiMBusRoute } from '../routes'

const app = new OpenAPIHono()

export const mBusHandler = app.openapi(postApiMBusRoute, (c) => {
  throw new Error('Not implemented')
})
