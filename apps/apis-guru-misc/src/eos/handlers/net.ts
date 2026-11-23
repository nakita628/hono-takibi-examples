import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postNetConnectionsRoute,
  postNetConnectRoute,
  postNetDisconnectRoute,
  postNetStatusRoute,
} from '../routes'

export const postNetConnectRouteHandler: RouteHandler<typeof postNetConnectRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetConnectionsRouteHandler: RouteHandler<typeof postNetConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNetDisconnectRouteHandler: RouteHandler<typeof postNetDisconnectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNetStatusRouteHandler: RouteHandler<typeof postNetStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}
