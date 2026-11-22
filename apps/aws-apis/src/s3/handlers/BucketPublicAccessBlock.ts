import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketPublicAccessBlockRoute,
  getBucketPublicAccessBlockRoute,
  putBucketPublicAccessBlockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const BucketPublicAccessBlockHandler = app
  .openapi(deleteBucketPublicAccessBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketPublicAccessBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketPublicAccessBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
