import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DescribeBatchPredictionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212DescribeBatchPredictionsHandler = app.openapi(
  postXAmzTargetAmazonML20141212DescribeBatchPredictionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
