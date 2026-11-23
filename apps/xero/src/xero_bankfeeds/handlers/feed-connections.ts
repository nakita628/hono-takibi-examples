import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFeedConnectionsIdRoute,
  getFeedConnectionsRoute,
  postFeedConnectionsDeleteRequestsRoute,
  postFeedConnectionsRoute,
} from '../routes'

export const getFeedConnectionsRouteHandler: RouteHandler<typeof getFeedConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFeedConnectionsRouteHandler: RouteHandler<
  typeof postFeedConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedConnectionsIdRouteHandler: RouteHandler<
  typeof getFeedConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedConnectionsDeleteRequestsRouteHandler: RouteHandler<
  typeof postFeedConnectionsDeleteRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
