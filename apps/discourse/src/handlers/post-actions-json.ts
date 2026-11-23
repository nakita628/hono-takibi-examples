import type { RouteHandler } from '@hono/zod-openapi'
import type { postPostActionsJsonRoute } from '../routes'

export const postPostActionsJsonRouteHandler: RouteHandler<
  typeof postPostActionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
