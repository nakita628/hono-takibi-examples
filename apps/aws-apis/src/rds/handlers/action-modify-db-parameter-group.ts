import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDBParameterGroupRoute,
  postActionModifyDBParameterGroupRoute,
} from '../routes'

export const getActionModifyDBParameterGroupRouteHandler: RouteHandler<
  typeof getActionModifyDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBParameterGroupRouteHandler: RouteHandler<
  typeof postActionModifyDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
