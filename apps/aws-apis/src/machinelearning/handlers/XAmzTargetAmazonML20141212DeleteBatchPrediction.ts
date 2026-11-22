import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DeleteBatchPredictionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212DeleteBatchPredictionHandler = app.openapi(
  postXAmzTargetAmazonML20141212DeleteBatchPredictionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
