import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
  getApiV2UpdateGroupSubscriptionsRoute,
  getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
  postApiV2UpdateGroupSubscriptionsBatchRoute,
  postApiV2UpdateGroupSubscriptionsRoute,
  putApiV2UpdateGroupSubscriptionsBatchRoute,
  putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const updateGroupSubscriptionsHandler = app
  .openapi(getApiV2UpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupSubscriptionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupSubscriptionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
