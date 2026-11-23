import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdjustAuthorisationRoute } from '../routes'

export const postAdjustAuthorisationRouteHandler: RouteHandler<
  typeof postAdjustAuthorisationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
