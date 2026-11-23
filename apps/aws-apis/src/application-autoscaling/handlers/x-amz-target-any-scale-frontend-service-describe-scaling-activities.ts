import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
