import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDeleteNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDeleteNotificationHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDeleteNotificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
