import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketUploadsRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketUploadsHandler = app.openapi(getBucketUploadsRoute, (c) => {
  throw new Error('Not implemented')
})
