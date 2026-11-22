import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketAnalyticsRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketAnalyticsHandler = app.openapi(getBucketAnalyticsRoute, (c) => {
  throw new Error('Not implemented')
})
