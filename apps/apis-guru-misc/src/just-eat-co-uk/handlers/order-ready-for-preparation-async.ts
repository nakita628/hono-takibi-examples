import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderReadyForPreparationAsyncRoute } from '../routes'

export const postOrderReadyForPreparationAsyncRouteHandler: RouteHandler<
  typeof postOrderReadyForPreparationAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
