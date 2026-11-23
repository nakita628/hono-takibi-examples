import { OpenAPIHono } from '@hono/zod-openapi'
import { postUntagStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const untagStreamHandler = app.openapi(postUntagStreamRoute, (c) => {
  throw new Error('Not implemented')
})
