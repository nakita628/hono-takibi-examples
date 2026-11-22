import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
