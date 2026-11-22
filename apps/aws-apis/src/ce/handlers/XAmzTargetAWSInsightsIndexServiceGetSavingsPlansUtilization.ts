import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
