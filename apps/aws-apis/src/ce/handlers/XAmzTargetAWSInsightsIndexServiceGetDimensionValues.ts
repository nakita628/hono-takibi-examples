import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetDimensionValuesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetDimensionValuesHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetDimensionValuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
