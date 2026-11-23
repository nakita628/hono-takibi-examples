import { OpenAPIHono } from '@hono/zod-openapi'
import { putSystemGcRoute, putSystemReconcileSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(putSystemGcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSystemReconcileSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
