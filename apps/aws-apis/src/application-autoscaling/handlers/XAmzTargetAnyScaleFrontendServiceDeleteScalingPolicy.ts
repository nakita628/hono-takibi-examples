import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
