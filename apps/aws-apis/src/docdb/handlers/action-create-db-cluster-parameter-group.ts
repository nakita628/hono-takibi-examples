import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBClusterParameterGroupRoute,
  postActionCreateDBClusterParameterGroupRoute,
} from '../routes'

export const getActionCreateDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionCreateDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionCreateDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
