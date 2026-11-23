import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDescribeBudgetNotificationsForAccountHandler =
  app.openapi(
    postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
