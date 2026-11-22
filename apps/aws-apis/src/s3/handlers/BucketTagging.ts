import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBucketTaggingRoute, getBucketTaggingRoute, putBucketTaggingRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketTaggingHandler = app
  .openapi(deleteBucketTaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketTaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketTaggingRoute, (c) => {
    throw new Error('Not implemented')
  })
