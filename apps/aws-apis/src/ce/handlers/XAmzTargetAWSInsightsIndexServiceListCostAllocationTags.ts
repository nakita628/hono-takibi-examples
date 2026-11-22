import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceListCostAllocationTagsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceListCostAllocationTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
