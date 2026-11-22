import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayUpdateSubscriberHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
