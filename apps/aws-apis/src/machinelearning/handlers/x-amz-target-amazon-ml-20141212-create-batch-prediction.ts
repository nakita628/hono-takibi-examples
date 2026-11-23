import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateBatchPredictionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212CreateBatchPredictionHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateBatchPredictionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
