import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinearreginterceptRoute } from '../routes'

const app = new OpenAPIHono()

export const linearreginterceptHandler = app.openapi(getLinearreginterceptRoute, (c) => {
  throw new Error('Not implemented')
})
