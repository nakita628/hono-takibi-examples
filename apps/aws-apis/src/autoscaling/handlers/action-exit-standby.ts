import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionExitStandbyRoute, postActionExitStandbyRoute } from '../routes'

export const getActionExitStandbyRouteHandler: RouteHandler<
  typeof getActionExitStandbyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionExitStandbyRouteHandler: RouteHandler<
  typeof postActionExitStandbyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
