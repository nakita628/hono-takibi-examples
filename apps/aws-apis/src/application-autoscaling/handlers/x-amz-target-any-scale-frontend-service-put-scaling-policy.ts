import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServicePutScalingPolicyHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
