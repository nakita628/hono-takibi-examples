import { OpenAPIHono } from '@hono/zod-openapi'
import { getExpRoute } from '../routes'

const app = new OpenAPIHono()

export const expHandler = app.openapi(getExpRoute, (c) => {
  throw new Error('Not implemented')
})
