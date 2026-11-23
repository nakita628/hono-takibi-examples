import { OpenAPIHono } from '@hono/zod-openapi'
import { postUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const untagResourceHandler = app.openapi(postUntagResourceRoute, (c) => {
  throw new Error('Not implemented')
})
