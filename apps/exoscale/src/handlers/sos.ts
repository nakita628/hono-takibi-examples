import { OpenAPIHono } from '@hono/zod-openapi'
import { getSosBucketPresignedUrlRoute, getSosBucketsUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const sosHandler = app
  .openapi(getSosBucketsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSosBucketPresignedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
