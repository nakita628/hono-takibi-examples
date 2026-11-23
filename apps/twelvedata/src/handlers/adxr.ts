import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdxrRoute } from '../routes'

const app = new OpenAPIHono()

export const adxrHandler = app.openapi(getAdxrRoute, (c) => {
  throw new Error('Not implemented')
})
