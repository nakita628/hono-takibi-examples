import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212UpdateBatchPredictionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212UpdateBatchPredictionHandler = app.openapi(
  postXAmzTargetAmazonML20141212UpdateBatchPredictionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
