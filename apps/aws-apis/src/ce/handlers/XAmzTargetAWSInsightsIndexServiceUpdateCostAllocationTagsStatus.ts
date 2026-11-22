import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceUpdateCostAllocationTagsStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
