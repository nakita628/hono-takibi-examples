import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateClusterSubnetGroupRoute,
  postActionCreateClusterSubnetGroupRoute,
} from '../routes'

export const getActionCreateClusterSubnetGroupRouteHandler: RouteHandler<
  typeof getActionCreateClusterSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateClusterSubnetGroupRouteHandler: RouteHandler<
  typeof postActionCreateClusterSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
