import type { RouteHandler } from '@hono/zod-openapi'
import type { postTargetActionsIndexRoute } from '../routes'

export const postTargetActionsIndexRouteHandler: RouteHandler<
  typeof postTargetActionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
