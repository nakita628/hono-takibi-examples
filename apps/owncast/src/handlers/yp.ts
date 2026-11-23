import { OpenAPIHono } from '@hono/zod-openapi'
import { getYpRoute } from '../routes'

const app = new OpenAPIHono()

export const ypHandler = app.openapi(getYpRoute, (c) => {
  throw new Error('Not implemented')
})
