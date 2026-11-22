import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationHandler =
  app.openapi(
    postXAmzTargetAWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGenerationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
