import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1betaNameRoute,
  getV1betaParentConnectionsRoute,
  patchV1betaNameConnectionsRoute,
  postV1betaParentAddSubnetworkRoute,
  postV1betaParentConnectionsRoute,
  postV1betaParentSearchRangeRoute,
} from '../routes'

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1betaNameConnectionsRouteHandler: RouteHandler<
  typeof patchV1betaNameConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentConnectionsRouteHandler: RouteHandler<
  typeof getV1betaParentConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentConnectionsRouteHandler: RouteHandler<
  typeof postV1betaParentConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentAddSubnetworkRouteHandler: RouteHandler<
  typeof postV1betaParentAddSubnetworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentSearchRangeRouteHandler: RouteHandler<
  typeof postV1betaParentSearchRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
