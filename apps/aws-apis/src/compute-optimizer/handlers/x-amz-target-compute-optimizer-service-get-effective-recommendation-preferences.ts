import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
