import { OpenAPIHono } from '@hono/zod-openapi'
import { postSyncResourceTypeResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app.openapi(postSyncResourceTypeResourceRoute, (c) => {
  throw new Error('Not implemented')
})
