import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
