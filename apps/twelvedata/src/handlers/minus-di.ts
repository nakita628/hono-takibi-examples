import { OpenAPIHono } from '@hono/zod-openapi'
import { getMinusDiRoute } from '../routes'

const app = new OpenAPIHono()

export const minusDiHandler = app.openapi(getMinusDiRoute, (c) => {
  throw new Error('Not implemented')
})
