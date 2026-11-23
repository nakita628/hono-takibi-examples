import { OpenAPIHono } from '@hono/zod-openapi'
import { postS3BucketsRoute } from '../routes'

const app = new OpenAPIHono()

export const s3BucketsHandler = app.openapi(postS3BucketsRoute, (c) => {
  throw new Error('Not implemented')
})
