import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFeedsFeedIdRoute,
  getFeedsFeedIdRoute,
  getFeedsRoute,
  patchFeedsFeedIdRoute,
  postFeedsFeedIdFetchRoute,
  postFeedsRoute,
} from '../routes'

export const getFeedsRouteHandler: RouteHandler<typeof getFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedsRouteHandler: RouteHandler<typeof postFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedsFeedIdRouteHandler: RouteHandler<typeof getFeedsFeedIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFeedsFeedIdRouteHandler: RouteHandler<typeof patchFeedsFeedIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteFeedsFeedIdRouteHandler: RouteHandler<typeof deleteFeedsFeedIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFeedsFeedIdFetchRouteHandler: RouteHandler<
  typeof postFeedsFeedIdFetchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
