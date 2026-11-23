import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchGrantPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const batchGrantPermissionsHandler = app.openapi(postBatchGrantPermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
