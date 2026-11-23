import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBParameterGroupRoute,
  postActionCreateDBParameterGroupRoute,
} from '../routes'

export const getActionCreateDBParameterGroupRouteHandler: RouteHandler<
  typeof getActionCreateDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBParameterGroupRouteHandler: RouteHandler<
  typeof postActionCreateDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
