import { OpenAPIHono } from '@hono/zod-openapi'
import { getTestRoute } from '../routes'

const app = new OpenAPIHono()

export const testHandler = app.openapi(getTestRoute, (c) => {
  throw new Error('Not implemented')
})
