import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDeleteBudgetActionHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
