import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
