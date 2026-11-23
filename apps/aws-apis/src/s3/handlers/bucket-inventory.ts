import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketInventoryHandler = app.openapi(getBucketInventoryRoute, (c) => {
  throw new Error('Not implemented')
})
