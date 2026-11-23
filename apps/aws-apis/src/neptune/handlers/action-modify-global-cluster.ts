import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyGlobalClusterRoute,
  postActionModifyGlobalClusterRoute,
} from '../routes'

export const getActionModifyGlobalClusterRouteHandler: RouteHandler<
  typeof getActionModifyGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyGlobalClusterRouteHandler: RouteHandler<
  typeof postActionModifyGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
