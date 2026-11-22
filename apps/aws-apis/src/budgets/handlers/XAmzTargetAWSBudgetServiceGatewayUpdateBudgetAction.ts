import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
