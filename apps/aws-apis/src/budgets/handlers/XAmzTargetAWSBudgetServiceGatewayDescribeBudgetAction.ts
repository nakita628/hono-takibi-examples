import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
