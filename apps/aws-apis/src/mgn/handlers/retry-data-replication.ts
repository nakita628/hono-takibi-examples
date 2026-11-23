import { OpenAPIHono } from '@hono/zod-openapi'
import { postRetryDataReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const retryDataReplicationHandler = app.openapi(postRetryDataReplicationRoute, (c) => {
  throw new Error('Not implemented')
})
