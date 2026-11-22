import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetPlanHandler = app.openapi(
  postXAmzTargetAWSGlueGetPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
