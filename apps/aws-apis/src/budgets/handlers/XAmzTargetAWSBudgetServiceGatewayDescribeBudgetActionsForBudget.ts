import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
