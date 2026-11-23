import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateGlobalClusterRoute,
  postActionCreateGlobalClusterRoute,
} from '../routes'

export const getActionCreateGlobalClusterRouteHandler: RouteHandler<
  typeof getActionCreateGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateGlobalClusterRouteHandler: RouteHandler<
  typeof postActionCreateGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
