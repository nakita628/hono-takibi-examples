import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBucketCorsRoute, getBucketCorsRoute, putBucketCorsRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketCorsHandler = app
  .openapi(deleteBucketCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
