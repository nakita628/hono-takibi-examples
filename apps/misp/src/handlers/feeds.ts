import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFeedsRoute,
  getFeedsViewFeedIdRoute,
  postFeedsAddRoute,
  postFeedsCacheFeedsCacheFeedsScopeRoute,
  postFeedsDisableFeedIdRoute,
  postFeedsEnableFeedIdRoute,
  postFeedsFetchFromAllFeedsRoute,
  postFeedsFetchFromFeedFeedIdRoute,
  putFeedsEditFeedIdRoute,
} from '../routes'

export const getFeedsRouteHandler: RouteHandler<typeof getFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedsViewFeedIdRouteHandler: RouteHandler<typeof getFeedsViewFeedIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFeedsAddRouteHandler: RouteHandler<typeof postFeedsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeedsEditFeedIdRouteHandler: RouteHandler<typeof putFeedsEditFeedIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFeedsEnableFeedIdRouteHandler: RouteHandler<
  typeof postFeedsEnableFeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedsDisableFeedIdRouteHandler: RouteHandler<
  typeof postFeedsDisableFeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedsCacheFeedsCacheFeedsScopeRouteHandler: RouteHandler<
  typeof postFeedsCacheFeedsCacheFeedsScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedsFetchFromFeedFeedIdRouteHandler: RouteHandler<
  typeof postFeedsFetchFromFeedFeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedsFetchFromAllFeedsRouteHandler: RouteHandler<
  typeof postFeedsFetchFromAllFeedsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
