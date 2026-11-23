import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFeedsPodcastVideoChaptersJsonRoute,
  getFeedsPodcastVideosXmlRoute,
  getFeedsSubscriptionsFormatRoute,
  getFeedsVideoCommentsFormatRoute,
  getFeedsVideosFormatRoute,
} from '../routes'

export const getFeedsVideoCommentsFormatRouteHandler: RouteHandler<
  typeof getFeedsVideoCommentsFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedsVideosFormatRouteHandler: RouteHandler<
  typeof getFeedsVideosFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedsSubscriptionsFormatRouteHandler: RouteHandler<
  typeof getFeedsSubscriptionsFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedsPodcastVideosXmlRouteHandler: RouteHandler<
  typeof getFeedsPodcastVideosXmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedsPodcastVideoChaptersJsonRouteHandler: RouteHandler<
  typeof getFeedsPodcastVideoChaptersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
