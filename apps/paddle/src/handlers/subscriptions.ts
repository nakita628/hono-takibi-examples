import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdHistoryRoute,
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRoute,
  patchSubscriptionsSubscriptionIdPreviewRoute,
  patchSubscriptionsSubscriptionIdRoute,
  postSubscriptionsSubscriptionIdActivateRoute,
  postSubscriptionsSubscriptionIdCancelRoute,
  postSubscriptionsSubscriptionIdChargePreviewRoute,
  postSubscriptionsSubscriptionIdChargeRoute,
  postSubscriptionsSubscriptionIdPauseRoute,
  postSubscriptionsSubscriptionIdResumeRoute,
} from '../routes'

export const getSubscriptionsSubscriptionIdHistoryRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsRouteHandler: RouteHandler<typeof getSubscriptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof patchSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdCancelRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdPauseRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdResumeRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdActivateRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSubscriptionsSubscriptionIdPreviewRouteHandler: RouteHandler<
  typeof patchSubscriptionsSubscriptionIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdChargeRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdChargeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdChargePreviewRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdChargePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
