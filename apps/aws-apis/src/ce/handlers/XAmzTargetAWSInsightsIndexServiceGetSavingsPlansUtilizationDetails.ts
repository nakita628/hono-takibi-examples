import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsHandler =
  app.openapi(postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansUtilizationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
