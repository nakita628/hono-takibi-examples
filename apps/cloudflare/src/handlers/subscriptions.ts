import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubscriptionsSubscriptionIdRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  postSubscriptionsRoute,
  postSubscriptionsSubscriptionIdBatchesBatchIdAckRoute,
  postSubscriptionsSubscriptionIdBatchesBatchIdExtendRoute,
  postSubscriptionsSubscriptionIdBatchesBatchIdNackRoute,
  postSubscriptionsSubscriptionIdConsumeRoute,
} from '../routes'

export const getSubscriptionsRouteHandler: RouteHandler<typeof getSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsRouteHandler: RouteHandler<typeof postSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdBatchesBatchIdAckRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdBatchesBatchIdAckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdBatchesBatchIdExtendRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdBatchesBatchIdExtendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdBatchesBatchIdNackRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdBatchesBatchIdNackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdConsumeRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdConsumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
