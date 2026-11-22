import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSubscriptionsEstimateRoute,
  getSubscriptionsItemsRoute,
  getSubscriptionsSubscriptionIdRoute,
  postSubscriptionsCreateRoute,
  postSubscriptionsRoute,
  postSubscriptionsSubscriptionIdCancelRoute,
  postSubscriptionsSubscriptionIdConfirmRoute,
  postSubscriptionsSubscriptionIdPauseRoute,
  postSubscriptionsSubscriptionIdResumeRoute,
  putSubscriptionsSubscriptionIdUpdateRoute,
} from '../routes'

export const postSubscriptionsRouteHandler: RouteHandler<typeof postSubscriptionsRoute> = async (
  c,
) => {}

export const postSubscriptionsCreateRouteHandler: RouteHandler<
  typeof postSubscriptionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionsSubscriptionIdConfirmRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSubscriptionsSubscriptionIdUpdateRouteHandler: RouteHandler<
  typeof putSubscriptionsSubscriptionIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsItemsRouteHandler: RouteHandler<
  typeof getSubscriptionsItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionsEstimateRouteHandler: RouteHandler<
  typeof getSubscriptionsEstimateRoute
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

export const postSubscriptionsSubscriptionIdCancelRouteHandler: RouteHandler<
  typeof postSubscriptionsSubscriptionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
