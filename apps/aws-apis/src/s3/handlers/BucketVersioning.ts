import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketVersioningRoute, putBucketVersioningRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketVersioningHandler = app
  .openapi(getBucketVersioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketVersioningRoute, (c) => {
    throw new Error('Not implemented')
  })
