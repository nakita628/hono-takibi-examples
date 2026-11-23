import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
