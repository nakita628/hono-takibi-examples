import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchGrantPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const BatchGrantPermissionsHandler = app.openapi(postBatchGrantPermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
