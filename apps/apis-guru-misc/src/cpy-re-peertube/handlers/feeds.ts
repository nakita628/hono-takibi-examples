import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFeedsSubscriptionsFormatRoute,
  getFeedsVideoCommentsFormatRoute,
  getFeedsVideosFormatRoute,
} from '../routes'

export const getFeedsSubscriptionsFormatRouteHandler: RouteHandler<
  typeof getFeedsSubscriptionsFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

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
