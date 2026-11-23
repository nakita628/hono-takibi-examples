import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchRevokePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const batchRevokePermissionsHandler = app.openapi(postBatchRevokePermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
