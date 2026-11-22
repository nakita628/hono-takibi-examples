import { OpenAPIHono } from '@hono/zod-openapi'
import { putNestedTestRoute } from '../routes'

const app = new OpenAPIHono()

export const nestedTestHandler = app.openapi(putNestedTestRoute, (c) => {
  throw new Error('Not implemented')
})
