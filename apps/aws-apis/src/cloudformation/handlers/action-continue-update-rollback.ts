import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionContinueUpdateRollbackRoute,
  postActionContinueUpdateRollbackRoute,
} from '../routes'

export const getActionContinueUpdateRollbackRouteHandler: RouteHandler<
  typeof getActionContinueUpdateRollbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionContinueUpdateRollbackRouteHandler: RouteHandler<
  typeof postActionContinueUpdateRollbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
