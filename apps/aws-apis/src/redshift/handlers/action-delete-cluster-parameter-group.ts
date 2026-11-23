import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteClusterParameterGroupRoute,
  postActionDeleteClusterParameterGroupRoute,
} from '../routes'

export const getActionDeleteClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionDeleteClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionDeleteClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
