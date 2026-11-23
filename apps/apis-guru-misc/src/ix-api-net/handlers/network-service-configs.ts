import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNetworkServiceConfigsIdRoute,
  getNetworkServiceConfigsIdCancellationPolicyRoute,
  getNetworkServiceConfigsIdRoute,
  getNetworkServiceConfigsRoute,
  patchNetworkServiceConfigsIdRoute,
  postNetworkServiceConfigsRoute,
  putNetworkServiceConfigsIdRoute,
} from '../routes'

export const getNetworkServiceConfigsRouteHandler: RouteHandler<
  typeof getNetworkServiceConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworkServiceConfigsRouteHandler: RouteHandler<
  typeof postNetworkServiceConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworkServiceConfigsIdRouteHandler: RouteHandler<
  typeof deleteNetworkServiceConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworkServiceConfigsIdRouteHandler: RouteHandler<
  typeof getNetworkServiceConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNetworkServiceConfigsIdRouteHandler: RouteHandler<
  typeof patchNetworkServiceConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworkServiceConfigsIdRouteHandler: RouteHandler<
  typeof putNetworkServiceConfigsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworkServiceConfigsIdCancellationPolicyRouteHandler: RouteHandler<
  typeof getNetworkServiceConfigsIdCancellationPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
