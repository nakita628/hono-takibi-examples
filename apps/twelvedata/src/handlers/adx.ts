import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdxRoute } from '../routes'

const app = new OpenAPIHono()

export const adxHandler = app.openapi(getAdxRoute, (c) => {
  throw new Error('Not implemented')
})
