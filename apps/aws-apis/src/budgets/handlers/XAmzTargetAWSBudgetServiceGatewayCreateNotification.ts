import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayCreateNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayCreateNotificationHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayCreateNotificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
