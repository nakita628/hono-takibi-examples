import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountHandler =
  app.openapi(
    postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
