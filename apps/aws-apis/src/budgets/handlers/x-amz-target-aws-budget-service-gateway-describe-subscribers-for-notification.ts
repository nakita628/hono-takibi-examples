import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDescribeSubscribersForNotificationHandler =
  app.openapi(postXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
