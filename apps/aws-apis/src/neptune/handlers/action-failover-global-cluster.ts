import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionFailoverGlobalClusterRoute,
  postActionFailoverGlobalClusterRoute,
} from '../routes'

export const getActionFailoverGlobalClusterRouteHandler: RouteHandler<
  typeof getActionFailoverGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionFailoverGlobalClusterRouteHandler: RouteHandler<
  typeof postActionFailoverGlobalClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
