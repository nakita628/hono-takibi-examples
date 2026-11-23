import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketMetricsHandler = app.openapi(getBucketMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
