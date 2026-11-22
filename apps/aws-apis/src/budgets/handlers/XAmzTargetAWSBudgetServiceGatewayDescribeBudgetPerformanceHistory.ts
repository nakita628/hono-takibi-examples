import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
