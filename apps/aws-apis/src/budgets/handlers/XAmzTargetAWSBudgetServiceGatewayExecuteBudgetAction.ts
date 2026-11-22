import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
