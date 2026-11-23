import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConnectSessionRoute,
  getConnectSessionRoute,
  postConnectSessionsReconnectRoute,
  postConnectSessionsRoute,
} from '../routes'

export const postConnectSessionsRouteHandler: RouteHandler<
  typeof postConnectSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectSessionsReconnectRouteHandler: RouteHandler<
  typeof postConnectSessionsReconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectSessionRouteHandler: RouteHandler<typeof getConnectSessionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteConnectSessionRouteHandler: RouteHandler<
  typeof deleteConnectSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
