import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayExecuteBudgetActionHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
