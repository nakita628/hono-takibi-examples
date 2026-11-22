import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
