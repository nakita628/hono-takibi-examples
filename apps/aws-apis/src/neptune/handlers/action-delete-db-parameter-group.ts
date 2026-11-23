import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBParameterGroupRoute,
  postActionDeleteDBParameterGroupRoute,
} from '../routes'

export const getActionDeleteDBParameterGroupRouteHandler: RouteHandler<
  typeof getActionDeleteDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBParameterGroupRouteHandler: RouteHandler<
  typeof postActionDeleteDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
