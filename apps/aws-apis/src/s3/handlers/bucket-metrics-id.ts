import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketMetricsIdRoute,
  getBucketMetricsIdRoute,
  putBucketMetricsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketMetricsIdHandler = app
  .openapi(deleteBucketMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
