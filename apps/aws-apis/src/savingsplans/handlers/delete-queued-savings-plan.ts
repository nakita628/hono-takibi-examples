import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteQueuedSavingsPlanRoute } from '../routes'

export const postDeleteQueuedSavingsPlanRouteHandler: RouteHandler<
  typeof postDeleteQueuedSavingsPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}
