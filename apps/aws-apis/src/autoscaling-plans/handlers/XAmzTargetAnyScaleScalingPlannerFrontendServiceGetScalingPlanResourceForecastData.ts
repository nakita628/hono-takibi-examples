import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataHandler =
  app.openapi(
    postXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
