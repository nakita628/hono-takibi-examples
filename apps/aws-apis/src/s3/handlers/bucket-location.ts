import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketLocationHandler = app.openapi(getBucketLocationRoute, (c) => {
  throw new Error('Not implemented')
})
