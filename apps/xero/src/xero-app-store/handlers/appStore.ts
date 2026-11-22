import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdUsageRecordsRoute,
  postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRoute,
  putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStoreHandler = app
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSubscriptionsSubscriptionIdUsageRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
