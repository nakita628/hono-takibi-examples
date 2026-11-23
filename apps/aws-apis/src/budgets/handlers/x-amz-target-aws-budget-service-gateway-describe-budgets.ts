import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDescribeBudgetsHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
