import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSBudgetServiceGatewayDeleteSubscriberHandler = app.openapi(
  postXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
