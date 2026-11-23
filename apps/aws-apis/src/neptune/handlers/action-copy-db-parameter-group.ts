import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCopyDBParameterGroupRoute,
  postActionCopyDBParameterGroupRoute,
} from '../routes'

export const getActionCopyDBParameterGroupRouteHandler: RouteHandler<
  typeof getActionCopyDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopyDBParameterGroupRouteHandler: RouteHandler<
  typeof postActionCopyDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
