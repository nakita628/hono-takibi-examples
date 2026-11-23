import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayCreateBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayCreateBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayCreateBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
