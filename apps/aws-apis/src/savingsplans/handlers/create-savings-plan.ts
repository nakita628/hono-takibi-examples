import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateSavingsPlanRoute } from '../routes'

export const postCreateSavingsPlanRouteHandler: RouteHandler<
  typeof postCreateSavingsPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}
