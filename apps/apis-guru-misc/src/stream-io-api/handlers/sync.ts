import { OpenAPIHono } from '@hono/zod-openapi'
import { postSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app.openapi(postSyncRoute, (c) => {
  throw new Error('Not implemented')
})
