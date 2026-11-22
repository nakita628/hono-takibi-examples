import { OpenAPIHono } from '@hono/zod-openapi'
import { postBucketDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketDeleteHandler = app.openapi(postBucketDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
