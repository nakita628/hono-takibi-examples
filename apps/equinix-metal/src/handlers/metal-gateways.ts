import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMetalGatewaysIdRoute,
  getMetalGatewaysIdBgpDynamicNeighborsRoute,
  getMetalGatewaysIdIpsRoute,
  getMetalGatewaysIdRoute,
  postMetalGatewaysIdBgpDynamicNeighborsRoute,
  postMetalGatewaysIdIpsRoute,
} from '../routes'

export const deleteMetalGatewaysIdRouteHandler: RouteHandler<
  typeof deleteMetalGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetalGatewaysIdRouteHandler: RouteHandler<typeof getMetalGatewaysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMetalGatewaysIdBgpDynamicNeighborsRouteHandler: RouteHandler<
  typeof getMetalGatewaysIdBgpDynamicNeighborsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetalGatewaysIdBgpDynamicNeighborsRouteHandler: RouteHandler<
  typeof postMetalGatewaysIdBgpDynamicNeighborsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetalGatewaysIdIpsRouteHandler: RouteHandler<
  typeof getMetalGatewaysIdIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetalGatewaysIdIpsRouteHandler: RouteHandler<
  typeof postMetalGatewaysIdIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
