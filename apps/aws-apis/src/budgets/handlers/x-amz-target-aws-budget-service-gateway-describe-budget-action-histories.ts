import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDescribeBudgetActionHistoriesHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
