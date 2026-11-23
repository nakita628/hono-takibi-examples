import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketLoggingRoute, putBucketLoggingRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketLoggingHandler = app
  .openapi(getBucketLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
