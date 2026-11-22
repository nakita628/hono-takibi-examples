import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDeleteBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
