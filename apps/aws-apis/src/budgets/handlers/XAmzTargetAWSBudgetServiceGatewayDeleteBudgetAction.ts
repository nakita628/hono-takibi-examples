import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
