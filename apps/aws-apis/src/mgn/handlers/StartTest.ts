import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartTestRoute } from '../routes'

const app = new OpenAPIHono()

export const StartTestHandler = app.openapi(postStartTestRoute, (c) => {
  throw new Error('Not implemented')
})
