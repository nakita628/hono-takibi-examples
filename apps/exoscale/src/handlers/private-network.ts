import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePrivateNetworkIdFieldRoute,
  deletePrivateNetworkIdRoute,
  getPrivateNetworkIdRoute,
  getPrivateNetworkRoute,
  postPrivateNetworkRoute,
  putPrivateNetworkIdAttachRoute,
  putPrivateNetworkIdDetachRoute,
  putPrivateNetworkIdRoute,
  putPrivateNetworkIdUpdateIpRoute,
} from '../routes'

export const putPrivateNetworkIdAttachRouteHandler: RouteHandler<
  typeof putPrivateNetworkIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPrivateNetworkIdUpdateIpRouteHandler: RouteHandler<
  typeof putPrivateNetworkIdUpdateIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrivateNetworkRouteHandler: RouteHandler<typeof getPrivateNetworkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPrivateNetworkRouteHandler: RouteHandler<typeof postPrivateNetworkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPrivateNetworkIdDetachRouteHandler: RouteHandler<
  typeof putPrivateNetworkIdDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPrivateNetworkIdRouteHandler: RouteHandler<
  typeof putPrivateNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrivateNetworkIdRouteHandler: RouteHandler<
  typeof getPrivateNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrivateNetworkIdRouteHandler: RouteHandler<
  typeof deletePrivateNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrivateNetworkIdFieldRouteHandler: RouteHandler<
  typeof deletePrivateNetworkIdFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}
