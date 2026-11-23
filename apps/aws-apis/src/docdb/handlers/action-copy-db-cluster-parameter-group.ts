import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCopyDBClusterParameterGroupRoute,
  postActionCopyDBClusterParameterGroupRoute,
} from '../routes'

export const getActionCopyDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionCopyDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopyDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionCopyDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
