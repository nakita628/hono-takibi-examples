import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyCacheSubnetGroupRoute,
  postActionModifyCacheSubnetGroupRoute,
} from '../routes'

export const getActionModifyCacheSubnetGroupRouteHandler: RouteHandler<
  typeof getActionModifyCacheSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCacheSubnetGroupRouteHandler: RouteHandler<
  typeof postActionModifyCacheSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
