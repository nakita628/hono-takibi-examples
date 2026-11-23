import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketAccelerateRoute, putBucketAccelerateRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketAccelerateHandler = app
  .openapi(getBucketAccelerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketAccelerateRoute, (c) => {
    throw new Error('Not implemented')
  })
