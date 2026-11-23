import { OpenAPIHono } from '@hono/zod-openapi'
import { postUntagresourceRoute } from '../routes'

const app = new OpenAPIHono()

export const untagresourceHandler = app.openapi(postUntagresourceRoute, (c) => {
  throw new Error('Not implemented')
})
