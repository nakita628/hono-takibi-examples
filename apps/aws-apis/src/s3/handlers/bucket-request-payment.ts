import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketRequestPaymentRoute, putBucketRequestPaymentRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketRequestPaymentHandler = app
  .openapi(getBucketRequestPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketRequestPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
