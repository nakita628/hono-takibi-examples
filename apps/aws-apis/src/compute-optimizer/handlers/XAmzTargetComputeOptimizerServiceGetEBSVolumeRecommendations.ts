import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
