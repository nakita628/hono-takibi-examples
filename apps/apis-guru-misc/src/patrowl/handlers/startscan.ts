import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartscanRoute } from '../routes'

const app = new OpenAPIHono()

export const startscanHandler = app.openapi(postStartscanRoute, (c) => {
  throw new Error('Not implemented')
})
