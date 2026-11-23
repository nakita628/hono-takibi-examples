import { OpenAPIHono } from '@hono/zod-openapi'
import { postSplitStringRoute } from '../routes'

const app = new OpenAPIHono()

export const splitStringHandler = app.openapi(postSplitStringRoute, (c) => {
  throw new Error('Not implemented')
})
