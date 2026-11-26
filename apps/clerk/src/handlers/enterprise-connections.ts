import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEnterpriseConnectionsRoute,
  postEnterpriseConnectionsRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdRoute,
  patchEnterpriseConnectionsEnterpriseConnectionIdRoute,
  deleteEnterpriseConnectionsEnterpriseConnectionIdRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
  postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
} from '../routes'

export const getEnterpriseConnectionsRouteHandler: RouteHandler<
  typeof getEnterpriseConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnterpriseConnectionsRouteHandler: RouteHandler<
  typeof postEnterpriseConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnterpriseConnectionsEnterpriseConnectionIdRouteHandler: RouteHandler<
  typeof getEnterpriseConnectionsEnterpriseConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEnterpriseConnectionsEnterpriseConnectionIdRouteHandler: RouteHandler<
  typeof patchEnterpriseConnectionsEnterpriseConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEnterpriseConnectionsEnterpriseConnectionIdRouteHandler: RouteHandler<
  typeof deleteEnterpriseConnectionsEnterpriseConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler: RouteHandler<
  typeof getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler: RouteHandler<
  typeof postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
