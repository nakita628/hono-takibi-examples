import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationHandler =
  app.openapi(
    postXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
