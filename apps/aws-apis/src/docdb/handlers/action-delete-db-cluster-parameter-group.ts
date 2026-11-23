import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBClusterParameterGroupRoute,
  postActionDeleteDBClusterParameterGroupRoute,
} from '../routes'

export const getActionDeleteDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionDeleteDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionDeleteDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
