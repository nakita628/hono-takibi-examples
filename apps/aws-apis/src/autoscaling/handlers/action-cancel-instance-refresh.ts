import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelInstanceRefreshRoute,
  postActionCancelInstanceRefreshRoute,
} from '../routes'

export const getActionCancelInstanceRefreshRouteHandler: RouteHandler<
  typeof getActionCancelInstanceRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelInstanceRefreshRouteHandler: RouteHandler<
  typeof postActionCancelInstanceRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
