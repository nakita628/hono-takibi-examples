import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
