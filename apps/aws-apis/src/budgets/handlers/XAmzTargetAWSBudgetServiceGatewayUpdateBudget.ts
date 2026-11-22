import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayUpdateBudgetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayUpdateBudgetHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayUpdateBudgetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
