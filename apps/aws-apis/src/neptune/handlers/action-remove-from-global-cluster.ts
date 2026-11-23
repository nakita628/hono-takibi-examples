import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveFromGlobalClusterRoute,
  postActionRemoveFromGlobalClusterRoute,
} from '../routes'

export const getActionRemoveFromGlobalClusterRouteHandler: RouteHandler<
  typeof getActionRemoveFromGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveFromGlobalClusterRouteHandler: RouteHandler<
  typeof postActionRemoveFromGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
