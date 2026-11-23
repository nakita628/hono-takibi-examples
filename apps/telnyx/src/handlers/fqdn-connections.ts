import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFqdnConnectionsIdRoute,
  getFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute,
  getFqdnConnectionsIdRoute,
  getFqdnConnectionsRoute,
  patchFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute,
  patchFqdnConnectionsIdRoute,
  postFqdnConnectionsRoute,
} from '../routes'

export const getFqdnConnectionsRouteHandler: RouteHandler<typeof getFqdnConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFqdnConnectionsRouteHandler: RouteHandler<
  typeof postFqdnConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRouteHandler: RouteHandler<
  typeof getFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRouteHandler: RouteHandler<
  typeof patchFqdnConnectionsFqdnConnectionIdFqdnAuthenticationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFqdnConnectionsIdRouteHandler: RouteHandler<
  typeof deleteFqdnConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFqdnConnectionsIdRouteHandler: RouteHandler<
  typeof getFqdnConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFqdnConnectionsIdRouteHandler: RouteHandler<
  typeof patchFqdnConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
