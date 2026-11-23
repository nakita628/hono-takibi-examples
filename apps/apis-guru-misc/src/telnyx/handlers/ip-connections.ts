import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIpConnectionsIdRoute,
  getIpConnectionsIdRoute,
  getIpConnectionsRoute,
  patchIpConnectionsIdRoute,
  postIpConnectionsRoute,
} from '../routes'

export const getIpConnectionsRouteHandler: RouteHandler<typeof getIpConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpConnectionsRouteHandler: RouteHandler<typeof postIpConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpConnectionsIdRouteHandler: RouteHandler<
  typeof deleteIpConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpConnectionsIdRouteHandler: RouteHandler<typeof getIpConnectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpConnectionsIdRouteHandler: RouteHandler<
  typeof patchIpConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
