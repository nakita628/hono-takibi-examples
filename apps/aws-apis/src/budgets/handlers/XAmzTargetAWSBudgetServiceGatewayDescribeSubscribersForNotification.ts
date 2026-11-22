import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationHandler =
  app.openapi(postXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
