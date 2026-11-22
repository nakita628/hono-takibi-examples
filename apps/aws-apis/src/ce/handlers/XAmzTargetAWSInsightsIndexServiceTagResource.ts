import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceTagResourceHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
