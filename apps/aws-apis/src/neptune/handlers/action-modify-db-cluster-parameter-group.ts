import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDBClusterParameterGroupRoute,
  postActionModifyDBClusterParameterGroupRoute,
} from '../routes'

export const getActionModifyDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionModifyDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionModifyDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
