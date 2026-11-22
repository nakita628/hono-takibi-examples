import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDescribeBudgetsHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
