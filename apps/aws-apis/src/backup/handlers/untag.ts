import { OpenAPIHono } from '@hono/zod-openapi'
import { postUntagResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const untagHandler = app.openapi(postUntagResourceArnRoute, (c) => {
  throw new Error('Not implemented')
})
