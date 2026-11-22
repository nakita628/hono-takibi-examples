import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayCreateSubscriberRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayCreateSubscriberHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayCreateSubscriberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
