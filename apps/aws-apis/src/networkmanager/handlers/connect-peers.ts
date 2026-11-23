import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConnectPeersConnectPeerIdRoute,
  getConnectPeersConnectPeerIdRoute,
  getConnectPeersRoute,
  postConnectPeersRoute,
} from '../routes'

export const postConnectPeersRouteHandler: RouteHandler<typeof postConnectPeersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getConnectPeersRouteHandler: RouteHandler<typeof getConnectPeersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConnectPeersConnectPeerIdRouteHandler: RouteHandler<
  typeof deleteConnectPeersConnectPeerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectPeersConnectPeerIdRouteHandler: RouteHandler<
  typeof getConnectPeersConnectPeerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
