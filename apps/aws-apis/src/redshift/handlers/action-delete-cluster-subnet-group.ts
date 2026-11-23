import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteClusterSubnetGroupRoute,
  postActionDeleteClusterSubnetGroupRoute,
} from '../routes'

export const getActionDeleteClusterSubnetGroupRouteHandler: RouteHandler<
  typeof getActionDeleteClusterSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteClusterSubnetGroupRouteHandler: RouteHandler<
  typeof postActionDeleteClusterSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
