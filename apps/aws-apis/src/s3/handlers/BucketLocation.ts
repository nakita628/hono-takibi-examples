import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketLocationHandler = app.openapi(getBucketLocationRoute, (c) => {
  throw new Error('Not implemented')
})
