import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayUpdateNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayUpdateNotificationHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayUpdateNotificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
