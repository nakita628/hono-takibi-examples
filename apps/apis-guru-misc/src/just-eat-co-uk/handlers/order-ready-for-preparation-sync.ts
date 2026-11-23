import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderReadyForPreparationSyncRoute } from '../routes'

export const postOrderReadyForPreparationSyncRouteHandler: RouteHandler<
  typeof postOrderReadyForPreparationSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
