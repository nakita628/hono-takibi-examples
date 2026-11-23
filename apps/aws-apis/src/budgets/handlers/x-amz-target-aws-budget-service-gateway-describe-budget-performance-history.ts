import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDescribeBudgetPerformanceHistoryHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
