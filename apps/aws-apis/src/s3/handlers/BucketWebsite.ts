import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBucketWebsiteRoute, getBucketWebsiteRoute, putBucketWebsiteRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketWebsiteHandler = app
  .openapi(deleteBucketWebsiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketWebsiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketWebsiteRoute, (c) => {
    throw new Error('Not implemented')
  })
