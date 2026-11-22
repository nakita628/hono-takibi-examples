import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationHandler =
  app.openapi(
    postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
