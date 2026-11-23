import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketIntelligentTieringRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketIntelligentTieringHandler = app.openapi(
  getBucketIntelligentTieringRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
