import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesHandler =
  app.openapi(
    postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
