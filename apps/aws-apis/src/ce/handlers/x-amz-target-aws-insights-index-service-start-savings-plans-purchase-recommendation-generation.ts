import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationHandler =
  app.openapi(
    postXAmzTargetAWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGenerationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
