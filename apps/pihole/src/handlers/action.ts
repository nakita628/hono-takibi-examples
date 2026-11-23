import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postActionFlushArpRoute,
  postActionFlushLogsRoute,
  postActionFlushNetworkRoute,
  postActionGravityRoute,
  postActionRestartdnsRoute,
} from '../routes'

export const postActionGravityRouteHandler: RouteHandler<typeof postActionGravityRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionRestartdnsRouteHandler: RouteHandler<
  typeof postActionRestartdnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionFlushLogsRouteHandler: RouteHandler<
  typeof postActionFlushLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionFlushArpRouteHandler: RouteHandler<typeof postActionFlushArpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionFlushNetworkRouteHandler: RouteHandler<
  typeof postActionFlushNetworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
