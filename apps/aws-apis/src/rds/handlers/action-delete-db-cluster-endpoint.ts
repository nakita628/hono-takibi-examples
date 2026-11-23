import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBClusterEndpointRoute,
  postActionDeleteDBClusterEndpointRoute,
} from '../routes'

export const getActionDeleteDBClusterEndpointRouteHandler: RouteHandler<
  typeof getActionDeleteDBClusterEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBClusterEndpointRouteHandler: RouteHandler<
  typeof postActionDeleteDBClusterEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
