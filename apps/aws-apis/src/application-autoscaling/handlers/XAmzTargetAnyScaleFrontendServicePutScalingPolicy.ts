import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServicePutScalingPolicyHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
