import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609SubscriptionsGdprDeleteRoute,
  postCrmObjects202609SubscriptionsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609SubscriptionsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609SubscriptionsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
