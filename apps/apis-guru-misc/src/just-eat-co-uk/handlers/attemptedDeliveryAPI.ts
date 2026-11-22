import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTenantOrdersOrderIdQueriesAttempteddeliveryRoute,
  postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attemptedDeliveryAPIHandler = app
  .openapi(postTenantOrdersOrderIdQueriesAttempteddeliveryRoute, (c) => {})
  .openapi(postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRoute, (c) => {})
