import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdUsageRecordsRoute,
  postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRoute,
  putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRoute,
} from './routes'
import {
  getSubscriptionsSubscriptionIdRouteHandler,
  getSubscriptionsSubscriptionIdUsageRecordsRouteHandler,
  postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRouteHandler,
  putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSubscriptionsSubscriptionIdRoute, getSubscriptionsSubscriptionIdRouteHandler)
  .openapi(
    postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRoute,
    postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRouteHandler,
  )
  .openapi(
    putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRoute,
    putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdUsageRecordsRoute,
    getSubscriptionsSubscriptionIdUsageRecordsRouteHandler,
  )

export default app
