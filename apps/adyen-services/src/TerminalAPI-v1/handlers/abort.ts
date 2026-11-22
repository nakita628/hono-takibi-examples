import { OpenAPIHono } from '@hono/zod-openapi'
import { postAbortRoute } from '../routes'

const app = new OpenAPIHono()

export const abortHandler = app.openapi(postAbortRoute, (c) => {
  throw new Error('Not implemented')
})
