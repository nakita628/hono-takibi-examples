import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDescribeBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
