import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryJSONRoute } from '../routes'

const app = new OpenAPIHono()

export const queryJsonHandler = app.openapi(postQueryJSONRoute, (c) => {
  throw new Error('Not implemented')
})
