import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateClusterParameterGroupRoute,
  postActionCreateClusterParameterGroupRoute,
} from '../routes'

export const getActionCreateClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionCreateClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionCreateClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
