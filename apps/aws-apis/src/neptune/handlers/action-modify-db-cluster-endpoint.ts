import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDBClusterEndpointRoute,
  postActionModifyDBClusterEndpointRoute,
} from '../routes'

export const getActionModifyDBClusterEndpointRouteHandler: RouteHandler<
  typeof getActionModifyDBClusterEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBClusterEndpointRouteHandler: RouteHandler<
  typeof postActionModifyDBClusterEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
