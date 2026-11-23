import { OpenAPIHono } from '@hono/zod-openapi'
import { postUntagResourceResourceArnTagKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const untagResourceHandler = app.openapi(postUntagResourceResourceArnTagKeysRoute, (c) => {
  throw new Error('Not implemented')
})
