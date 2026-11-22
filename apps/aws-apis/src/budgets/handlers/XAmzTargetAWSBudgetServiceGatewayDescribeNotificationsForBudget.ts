import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
