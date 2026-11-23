import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRollbackInstanceRefreshRoute,
  postActionRollbackInstanceRefreshRoute,
} from '../routes'

export const getActionRollbackInstanceRefreshRouteHandler: RouteHandler<
  typeof getActionRollbackInstanceRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRollbackInstanceRefreshRouteHandler: RouteHandler<
  typeof postActionRollbackInstanceRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
