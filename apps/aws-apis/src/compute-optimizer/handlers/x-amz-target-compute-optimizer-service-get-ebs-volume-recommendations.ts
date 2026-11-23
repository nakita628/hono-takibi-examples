import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetEbsVolumeRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
