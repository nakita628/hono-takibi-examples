import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketAnalyticsIdRoute,
  getBucketAnalyticsIdRoute,
  putBucketAnalyticsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketAnalyticsIdHandler = app
  .openapi(deleteBucketAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
