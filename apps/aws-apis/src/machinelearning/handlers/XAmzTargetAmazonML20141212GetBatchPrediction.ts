import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212GetBatchPredictionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212GetBatchPredictionHandler = app.openapi(
  postXAmzTargetAmazonML20141212GetBatchPredictionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
