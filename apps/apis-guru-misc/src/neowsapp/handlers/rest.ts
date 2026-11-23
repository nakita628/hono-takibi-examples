import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRestV1FeedRoute,
  getRestV1FeedTodayRoute,
  getRestV1NeoAsteroidIdRoute,
  getRestV1NeoBrowseRoute,
  getRestV1NeoSentryAsteroidIdRoute,
  getRestV1NeoSentryRoute,
  getRestV1StatsRoute,
} from '../routes'

export const getRestV1FeedRouteHandler: RouteHandler<typeof getRestV1FeedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestV1FeedTodayRouteHandler: RouteHandler<typeof getRestV1FeedTodayRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestV1NeoBrowseRouteHandler: RouteHandler<typeof getRestV1NeoBrowseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestV1NeoSentryRouteHandler: RouteHandler<typeof getRestV1NeoSentryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestV1NeoSentryAsteroidIdRouteHandler: RouteHandler<
  typeof getRestV1NeoSentryAsteroidIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestV1NeoAsteroidIdRouteHandler: RouteHandler<
  typeof getRestV1NeoAsteroidIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestV1StatsRouteHandler: RouteHandler<typeof getRestV1StatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
