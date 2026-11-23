import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysHandler = app.openapi(
  postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
