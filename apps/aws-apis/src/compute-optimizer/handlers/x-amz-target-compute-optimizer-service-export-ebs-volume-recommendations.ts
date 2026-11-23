import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceExportEbsVolumeRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
