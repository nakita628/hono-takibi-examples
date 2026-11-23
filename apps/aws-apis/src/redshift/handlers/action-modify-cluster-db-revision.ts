import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClusterDbRevisionRoute,
  postActionModifyClusterDbRevisionRoute,
} from '../routes'

export const getActionModifyClusterDbRevisionRouteHandler: RouteHandler<
  typeof getActionModifyClusterDbRevisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterDbRevisionRouteHandler: RouteHandler<
  typeof postActionModifyClusterDbRevisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
