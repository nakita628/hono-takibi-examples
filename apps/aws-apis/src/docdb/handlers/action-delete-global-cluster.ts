import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteGlobalClusterRoute,
  postActionDeleteGlobalClusterRoute,
} from '../routes'

export const getActionDeleteGlobalClusterRouteHandler: RouteHandler<
  typeof getActionDeleteGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteGlobalClusterRouteHandler: RouteHandler<
  typeof postActionDeleteGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
