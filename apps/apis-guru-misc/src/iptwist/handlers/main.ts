import { OpenAPIHono } from '@hono/zod-openapi'
import { postRoute } from '../routes'

const app = new OpenAPIHono()

export const mainHandler = app.openapi(postRoute, (c) => {
  throw new Error('Not implemented')
})
