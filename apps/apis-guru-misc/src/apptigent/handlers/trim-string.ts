import { OpenAPIHono } from '@hono/zod-openapi'
import { postTrimStringRoute } from '../routes'

const app = new OpenAPIHono()

export const trimStringHandler = app.openapi(postTrimStringRoute, (c) => {
  throw new Error('Not implemented')
})
