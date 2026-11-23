import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRoute,
  postTenantOrdersOrderIdQueriesAttempteddeliveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantHandler = app
  .openapi(postTenantOrdersOrderIdQueriesAttempteddeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRoute, (c) => {
    throw new Error('Not implemented')
  })
