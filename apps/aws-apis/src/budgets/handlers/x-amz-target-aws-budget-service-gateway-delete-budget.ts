import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayDeleteBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
