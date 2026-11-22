import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketIntelligentTieringRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketIntelligentTieringHandler = app.openapi(
  getBucketIntelligentTieringRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
