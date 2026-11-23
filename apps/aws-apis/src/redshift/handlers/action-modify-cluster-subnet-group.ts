import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClusterSubnetGroupRoute,
  postActionModifyClusterSubnetGroupRoute,
} from '../routes'

export const getActionModifyClusterSubnetGroupRouteHandler: RouteHandler<
  typeof getActionModifyClusterSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterSubnetGroupRouteHandler: RouteHandler<
  typeof postActionModifyClusterSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
