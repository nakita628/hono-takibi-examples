import { OpenAPIHono } from '@hono/zod-openapi'
import { getSosBucketPresignedUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const sosHandler = app.openapi(getSosBucketPresignedUrlRoute, (c) => {
  throw new Error('Not implemented')
})
