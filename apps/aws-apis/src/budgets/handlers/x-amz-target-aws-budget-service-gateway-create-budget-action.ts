import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayCreateBudgetActionHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
