import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketVersionsHandler = app.openapi(getBucketVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
