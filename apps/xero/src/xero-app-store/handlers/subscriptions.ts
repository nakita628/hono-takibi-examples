import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdUsageRecordsRoute,
  postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRoute,
  putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRoute,
} from '../routes'

export const getSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRouteHandler: RouteHandler<
  typeof putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSubscriptionIdUsageRecordsRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdUsageRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
