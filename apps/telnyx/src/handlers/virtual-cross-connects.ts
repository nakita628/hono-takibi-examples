import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVirtualCrossConnectsIdRoute,
  getVirtualCrossConnectsCoverageRoute,
  getVirtualCrossConnectsIdRoute,
  getVirtualCrossConnectsRoute,
  patchVirtualCrossConnectsIdRoute,
  postVirtualCrossConnectsRoute,
} from '../routes'

export const getVirtualCrossConnectsRouteHandler: RouteHandler<
  typeof getVirtualCrossConnectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVirtualCrossConnectsRouteHandler: RouteHandler<
  typeof postVirtualCrossConnectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVirtualCrossConnectsCoverageRouteHandler: RouteHandler<
  typeof getVirtualCrossConnectsCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVirtualCrossConnectsIdRouteHandler: RouteHandler<
  typeof deleteVirtualCrossConnectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVirtualCrossConnectsIdRouteHandler: RouteHandler<
  typeof getVirtualCrossConnectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVirtualCrossConnectsIdRouteHandler: RouteHandler<
  typeof patchVirtualCrossConnectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
