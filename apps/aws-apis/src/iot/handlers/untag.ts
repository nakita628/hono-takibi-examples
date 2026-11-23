import { OpenAPIHono } from '@hono/zod-openapi'
import { postUntagRoute } from '../routes'

const app = new OpenAPIHono()

export const untagHandler = app.openapi(postUntagRoute, (c) => {
  throw new Error('Not implemented')
})
