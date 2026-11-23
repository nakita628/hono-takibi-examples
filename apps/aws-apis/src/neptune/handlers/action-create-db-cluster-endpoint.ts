import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBClusterEndpointRoute,
  postActionCreateDBClusterEndpointRoute,
} from '../routes'

export const getActionCreateDBClusterEndpointRouteHandler: RouteHandler<
  typeof getActionCreateDBClusterEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBClusterEndpointRouteHandler: RouteHandler<
  typeof postActionCreateDBClusterEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
