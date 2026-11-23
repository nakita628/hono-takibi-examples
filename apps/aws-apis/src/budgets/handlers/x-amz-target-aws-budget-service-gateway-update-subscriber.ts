import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsBudgetServiceGatewayUpdateSubscriberHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
